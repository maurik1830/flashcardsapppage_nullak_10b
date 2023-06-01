import json
import random
anime = ["Kodomo", "Sónen", "Seinen", "Sódzsó", "Dzsoszei", "Ecchi", "Hentai", "Shónen-ai", "Jaoi", "Sódzsó-ai", "Juri"]

with open("term_def.json", "r", encoding="utf-8") as forras:
    adatok = json.load(forras)

randsz = random.randint(0, len(anime))
adat_ani = anime[randsz]

adat_ani2 = adatok["anime"][0]["Kodomo"]

print(adatok["anime"][0]["Kodomo"])






