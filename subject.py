import toml

config = toml.load("config.toml")['subject']

class SubjectExtractor:
    def __init__(self, co):
        self.co = co
        self.prompt = config['prompt']
        self.divider = config['divider']
        self.samples = config['samples']

        heading_prompt = ""
        for sample in self.samples:
            heading_prompt += f"{sample[0]}\n{self.prompt}{sample[1]}\n{self.divider}\n"

        self.heading_prompt = heading_prompt

    def query(self, text):
        extraction = self.co.generate(
            model='large',
            prompt=self.heading_prompt + f"{text}\n{self.prompt}",
            max_tokens=5,
            temperature=0.1,
            stop_sequences=["\n"])

        return extraction.generations[0].text[:-1]

    __call__ = query