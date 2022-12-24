import csv
from tqdm import tqdm
import wiki

import multiprocessing
import pickle

def process(page):
    try: 
        soup = wiki.fetch_page(page)
        pairs, citations = wiki.extract_text_with_citations(soup)

        texts = [pair[0] for pair in pairs]
        citation_map = {page+x: citations[x] for x in citations}
        citations = [[page+x for x in pair[1]] for pair in pairs]

        return texts, citations, citation_map, page

    except:
        return [], [], {}

if __name__ == "__main__":
    with open("nnlist.csv", "r", encoding="utf-8") as f:
        data = list(csv.reader(f))

    merged_texts = []
    merged_citations = []
    merge_citation_map = {}
    merge_pages = []

    data = data[:]
    pages = [x[1] for x in data]

    with multiprocessing.Pool(30) as p:
        for texts, citations, citation_map, page in tqdm(p.imap(process, pages), total=len(pages)):
            merged_texts += texts
            merged_citations += citations
            merge_citation_map.update(citation_map)
            merge_pages += [page] * len(texts)

    with open("nnlist.pickle", "wb") as f:
        pickle.dump({
            "texts": merged_texts,
            "citations": merged_citations,
            "citation_map": merge_citation_map,
            "pages": merge_pages
        }, f)

