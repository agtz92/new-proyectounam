# Year Update Guide for Blog Posts

## Instructions for the Agent

When updating year references in blog posts:

1. **Search** all `.md` files in `/blog/` for the old year in `title`, `short-description`, `tags`, and body fields (`mk1`-`mk5`).
2. **Replace** the old year with the current year in those fields.
3. **DO NOT change:**
   - `date:` fields in frontmatter (these are publication timestamps)
   - URLs (image URLs, external links — changing them will break the links)
   - Historical/factual references to real past events (news, statistics, reports)
4. **Run** `grep -r "^title:.*OLD_YEAR" blog/` after updating to verify no titles were missed.
5. **Commit** with a message like: `Update year references from XXXX to XXXX in blog titles and body text`

---

## Blog Posts Updated (2025/2020 -> 2026)

The following 32 blog posts had their year references updated to 2026. These are the ones most likely to need updating again next year.

### Exam Guides (UNAM / IPN)

1. cómo-estudiar-matemáticas-para-el-examen-de-admisión-unam-2025-sin-morir-en-el-intento
2. cómo-estudiar-para-el-examen-unam-ipn-2025-temas-que-más-caen-y-cómo-dominarlos
3. domina-álgebra-para-el-examen-de-admisión-unam-2025-guía-completa-con-temas-clave
4. domina-español-para-el-examen-de-admisión-unam-2025-comprensión-lectora-gramática-y-ortografía
5. ejercicios-unam-del-examen-2020
6. examen-ipn-2025-los-temas-de-física-y-química-que-más-se-repiten
7. guía-completa-de-álgebra-para-el-examen-de-admisión-unam-2025-aprende-paso-a-paso
8. guía-completa-unam-2025-temas-más-preguntados-en-el-examen-de-admisión
9. guía-de-historia-de-méxico-para-el-examen-unam-2025-temas-que-siempre-se-repiten-y-cómo-estudiarlos
10. guía-definitiva-para-estudiar-las-materias-del-examen-de-admisión-unam-2025-y-asegurar-tu-luga
11. guía-ipn-2025-los-temas-que-más-se-repiten-en-el-examen-de-admisión-y-cómo-dominarlos
12. historia-de-méxico-para-el-examen-de-admisión-unam-2025-los-temas-más-importantes-explicados-paso-a-paso
13. historia-de-méxico-para-el-examen-unam-2025-guía-definitiva-con-temas-explicados-paso-a-paso
14. las-materias-que-más-se-repiten-en-los-exámenes-de-admisión-2025-de-la-unam-ipn-y-uam-¡no-te-las-esperas
15. los-temas-de-biología-que-más-se-repiten-en-el-examen-de-admisión-unam-2025
16. los-temas-más-preguntados-en-el-examen-de-admisión-a-la-unam-2025-que-debes-dominar
17. los-temas-más-preguntados-en-el-examen-de-admisión-unam-2025-guía-completa-para-prepararte-y-asegurar-tu-lugar-https-i-ytimg-com-vi-1hlmtmyucza-maxresdefault-jpg
18. matemáticas-en-el-examen-de-admisión-unam-2025-los-temas-más-difíciles-y-cómo-dominarlos
19. temario-completo-de-biología-para-estudiar-y-pasar-el-examen-de-admisión-unam-2025
20. temario-de-física-para-estudiar-y-pasar-el-examen-de-admisión-unam-2025
21. temario-de-química-para-estudiar-y-pasar-el-examen-de-admisión-unam-2025
22. ¡las-materias-que-más-se-repiten-en-los-exámenes-de-admisión-2025-de-la-unam-ipn-y-uam-te-sorprenderán

### Career / Job Market Posts

23. 6-profesiones-en-logística-con-alta-demanda-y-excelentes-oportunidades-en-2025
24. estas-son-las-profesiones-de-marketing-digital-con-más-salida-laboral-en-2025
25. las-3-mejores-apps-de-inteligencia-artificial-que-debes-conocer-y-usar-en-2025
26. las-5-profesiones-de-marketing-digital-con-más-futuro-y-demanda-en-2025
27. las-carreras-universitarias-con-más-salidas-en-2025-y-cómo-elegir-la-correcta-para-ti-sin-equivocarte
28. las-profesiones-de-inteligencia-artificial-con-mayor-demanda-en-españa-en-2025
29. los-sectores-con-más-empleo-en-2025-guía-para-elegir-tu-futuro-profesional
30. top-10-carreras-universitarias-con-mejor-salida-laboral-en-españa-en-2025

### Other

31. 7-claves-para-identificar-un-buen-clima-laboral-y-mejorar-tu-futuro-profesional
32. escándalo-en-la-elección-judicial-ine-no-puede-cancelar-candidaturas-sospechosas-en-plena-campaña

---

> **Note:** The filenames above still contain the old year in the filename itself (e.g. `...-2025.md`). Only the content inside the files (title, description, body text) was updated. The filenames were kept as-is to avoid breaking existing URLs/slugs.
