import rules
from logic import getWordParts

# for rule in rules.rules:
#     print(rule.get('name'))

word = "umwana"
parts = getWordParts(word)
print(parts)