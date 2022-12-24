from urllib.request import urlopen
import wikipedia
import bs4
import re

def find_wiki(query):
    pages = wikipedia.search(query)
    texts = []
    for page in pages[:5]:
        try:
            texts.append(wikipedia.page(page).content)
        except:
            pass

    return texts    

def fetch_page(page):
    try:
        page = wikipedia.page(page, auto_suggest=False)
    except wikipedia.exceptions.DisambiguationError as e:
        page = wikipedia.page(e.options[0], auto_suggest=False)
        
    page = urlopen(page.url)
    html = page.read().decode("utf-8")
    soup = bs4.BeautifulSoup(html, "html.parser")
    return soup

def extract_text_with_citations(soup):
    # fina all paragraphs
    paragraphs = soup.find_all("p")

    citations = soup.find_all('li', id=re.compile("cite_note"))
    citation_map = {}
    for citation in citations:
        text = citation.select_one("span.reference-text")
        
        if text: text = str(text)
        else: text = citation.text
        
        citation_map[citation.get('id')] = text

    pairs = []
    # extract <sup class="reference"> <a href="#cite_note"

    for paragraph in paragraphs:
        cited = []
        for sup in paragraph.select("sup.reference a"):
            cited.append(sup.get('href')[1:])
        
        if paragraph.text:
            pairs.append((paragraph.text, cited))
    
    return pairs, citation_map
