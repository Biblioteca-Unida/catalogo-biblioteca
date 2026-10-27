const catalogoLibros = [
    {
        "carrera": "Enfermería",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "M. A. de Cos",
        "titulo": "Interacciones de fármacos y sus implicaciones clínicas",
        "link": "https://drive.google.com/file/d/1XdWsp_TreiwQ1KrUWnXFm08DLuzSjapY/view?usp=sharing"
    },
    {
        "titulo": "GUÍA RÁPIDA DE POBLACIÓN <span class=\"libro-edicion\">4ed</span>",
        "carrera": "Nutrición",
        "autor": "Arthur Haupt y Thomas T. Kane",
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1e7Q3bW9v3S0_XyZYDVOChKjsZirKBhHJ/view?usp=sharing"
    },
    {
        "autor": "V.Ya. Lípchenko, R.P. Sámusev",
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1AhLTT-Kyp3LzVLaMsps8Sd0VsCc9NtkD/view?usp=sharing",
        "carrera": "Nutrición",
        "titulo": "Atlas de Anatomía Normla Humana"
    },
    {
        "link": "https://drive.google.com/file/d/1tD4KCjna8OotwFCZRt--2VsuutVwfuFs/view?usp=sharing",
        "titulo": "Contabilidad financiera",
        "autor": "José Muñoz Jiménez",
        "carrera": "Administración de Empresas",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/1jvSDjUeRu1hmae8ukF4mdji-APpfJ-5v/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería en Sistemas",
        "titulo": "Configuración Básica de Redes (MODELO OSI)",
        "autor": "Varios Autores"
    },
    {
        "autor": "LEONARDO CARUANA DE LAS CAGIGAS",
        "carrera": "Contaduría Pública",
        "titulo": "Cambio y crecimiento económico",
        "link": "https://drive.google.com/file/d/1bWW2EN3NawcyU6cWSN1oY6ZS8GAsyt2V/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Contaduría Pública",
        "autor": "Stephen P. Robbins, David A. DeCenzo",
        "link": "https://drive.google.com/file/d/1JRIsdT2bJGg2F_PqrUnTo9NPLAEEqduh/view?usp=sharing",
        "titulo": "Supervisión"
    },
    {
        "link": "https://drive.google.com/file/d/1bnNgvb7HtH6DDOYzk-_YPyoHOiY8-2-z/view?usp=sharing",
        "autor": "PHILIP KOTLER, KEVIN LANE KELLER",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "titulo": "Dirección de marketing <span class=\"libro-edicion\">10 ed</span>",
        "carrera": "Marketing y Gestión Comercial"
    },
    {
        "link": "https://drive.google.com/file/d/19Vw4BuTlOdWWx1vI1cL2Mdl1efP_qjJd/view?usp=sharing",
        "titulo": "CONTABILIDAD COMERCIAL Y DE SERVICIOS Módulo II: Información financiera básica 2018",
        "autor": "S/A",
        "carrera": "Marketing y Gestión Comercial",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "carrera": "Comercio Internacional",
        "titulo": "Administración y dirección de la producción: Enfoque estratégico y de calidad",
        "autor": "Fernando D'Alessio Ipinza",
        "link": "https://drive.google.com/file/d/19zkN-_-HEiR7tYSTvu2ZWQDyf4x0LQHb/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "autor": "Álvaro Zapata Domínguez (et al)",
        "link": "https://drive.google.com/file/d/15nDzbRS2D_hhdlensqj0fFtadqcHwAuZ/view?usp=sharing",
        "carrera": "Administración de Empresas",
        "titulo": "TEORÍAS CONTEMPORÁNEAS DE LA ORGANIZACIÓN Y DEL MANAGEMENT"
    },
    {
        "autor": "Lee Krajewski, Larry Ritzman",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1GnQFHWs0Mi1bJF53rnSa_6oqSqZWilKX/view?usp=sharing",
        "titulo": "Administración de Operaciones",
        "carrera": "Ingeniería Comercial"
    },
    {
        "carrera": "Derecho",
        "titulo": "Código Civil de la República Argentina",
        "autor": "S/A",
        "link": "https://docs.google.com/document/d/1kmgkSF5x_6iQ1exZ1Ym-A3a6dZZKOYWQ/edit?usp=sharing&ouid=111681295415760948313&rtpof=true&sd=true",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80"
    },
    {
        "titulo": "Álgebra Superior <span class=\"libro-edicion\">3RA EDICIÓN</span>",
        "carrera": "Ingeniería en Informática",
        "autor": "Serie Schaum",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/19hCeJVktG5I7rB1o5kS09qjVVH_Q3s-Y/view?usp=sharing"
    },
    {
        "carrera": "Nutrición",
        "titulo": "El proceso de la Investigación: Introducción a la Teoría y a la Práctica",
        "link": "https://drive.google.com/file/d/1Kc8DkFJ99LxIj7K_hiNIa3iaiZVfTRtr/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80",
        "autor": "David K. Berlo"
    },
    {
        "autor": "ALBERTS — JOHNSON — LEWIS — RAFF - ROBERTS - WALTER",
        "carrera": "Enfermería",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1iU_n2DrJMcSekXsV10hj6Dtxy80-1-kv/view?usp=sharing",
        "titulo": "Biología Molecular de la Célula <span class=\"libro-edicion\">5 ed</span>"
    },
    {
        "link": "https://drive.google.com/file/d/14ocW7GswbMDAJmh__x_iCTwX2UBGfZ-U/view",
        "titulo": "Anatomía y Fisiología del Cuerpo Humano",
        "autor": "Jesús A. F. Tresguerres",
        "carrera": "Medicina",
        "imagen": "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "Moisés Lazaro",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1gx6pwa2KwdTJ-r90cSQbAe3k4BjEQq17/view?usp=sharing",
        "carrera": "Ingeniería en Informática",
        "titulo": "Analisis Matematico IV"
    },
    {
        "titulo": "ANTROPOLOGIA DEL TURISMO",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "autor": "Maximiliano Korstanje",
        "carrera": "Derecho",
        "link": "https://drive.google.com/file/d/1jYJWbjgQ-mSyQ6raPVaKH4XMxbbDCrqU/view?usp=sharing"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=300&q=80",
        "carrera": "Medicina",
        "titulo": "Abordajes Neuroquirúrgicos de la Patología Craneal y Cerebral",
        "autor": "José Manuel González-Darder",
        "link": "https://drive.google.com/file/d/1K5ZMqNmwNL7DqgulX3RB-85_Qsl8D65m/view"
    },
    {
        "carrera": "Administración de Empresas",
        "autor": "CESAR MARCILLO, ALEJANDRO SALCEDO",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/15h8T-P5sDqFMynoyODc33RUyKAb8d-5_/view?usp=sharing",
        "titulo": "ECONOMIA SOLIDARIA"
    },
    {
        "autor": "I. M. Sóbol",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería en Informática",
        "link": "https://drive.google.com/file/d/13rjyAD1iGKhfw_DglJa9JMX-Qt8JLGDj/view?usp=sharing",
        "titulo": "Método de Montecarlo"
    },
    {
        "autor": "J. A. Armijo",
        "titulo": "Absorción, distribución y eliminación de los fármacos",
        "link": "https://drive.google.com/file/d/1F0ZxWgmYBGHghuIsaeDv2cpUc3lTWwOj/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Enfermería"
    },
    {
        "link": "https://drive.google.com/file/d/1sZU-TKxFtJ0QVp0XDrB4oLCzk1eSql_9/view?usp=sharing",
        "autor": "S/A",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Contaduría Pública",
        "titulo": "Sistemas de Contabilidad"
    },
    {
        "autor": "Uspensky - V. A. Uspenski",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería en Informática",
        "link": "https://drive.google.com/file/d/1-Qa6O-lsfutZ0GFluKdoa8NxNwokAUfd/view?usp=sharing",
        "titulo": "Triangulo de Pascal"
    },
    {
        "titulo": "Introducción a las Finanzas",
        "carrera": "Administración de Empresas",
        "autor": "María de la Luz Bravo Santillán, Viviana Lambretón Torres, Humberto Márquez González",
        "link": "https://drive.google.com/file/d/1UuvAtMbGwkjMhrhoKQHMH0sgW8CLUZmu/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "Leon G. Schiffman, Leslie Lazar Kanuk",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1hk6RLEkhUM4h3A39ZLS80rODo9qYa7iq/view?usp=sharing",
        "titulo": "Comportamiento del Consumidor <span class=\"libro-edicion\">10 ed</span>",
        "carrera": "Contaduría Pública"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1UVtpVKCoJ9co1JrNsxVVNd2Np0yaZ7Wk/view?usp=sharing",
        "titulo": "PLANEA Y ADMINISTRA PEQUEÑOS NEGOCIOS",
        "carrera": "Marketing y Gestión Comercial",
        "autor": ".Dr. Manuel Valenzuela Valenzuela"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ciencias Políticas",
        "link": "https://drive.google.com/file/d/1UfoO-4ZYp78b1yirMPUgdOwUs3V6G7g8/view?usp=sharing",
        "titulo": "Principales Organizaciones Internacionales Plenamente Establecidas",
        "autor": "Maria de los A. Pérez"
    },
    {
        "autor": "Jordi Conesa Caralt (coord.) y Josep Curto Díaz",
        "titulo": "Introducción al Business Intelligence",
        "carrera": "Administración de Empresas",
        "link": "https://drive.google.com/file/d/10bxsh1BvoW8XqXIV1tyiVDeC4HUr2LsW/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1k7EotTTUCgia_DsPTNT7MhIuNmPHOlUU/view?usp=sharing",
        "titulo": "Fármacos analgésicos-antitérmicos y antiinflamatorios no esteroideos. Antiartríticos",
        "carrera": "Enfermería",
        "autor": "M. Feria"
    },
    {
        "autor": "Corte Suprema de Justicia",
        "titulo": "Primer Coloquio de derecho civil",
        "link": "https://drive.google.com/file/d/1b_zAKMo-xsuKsx472CL9tdITjVoRCLSx/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "carrera": "Derecho"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1ysNnOoPRzguSGF3Ddxcg-AGVrj1ZJfok/view?usp=sharing",
        "autor": "César Cabello",
        "titulo": "Decisiones Estratégicas: Negociar y Priorizar Líneas de Acción Orientadas al Desarrollo",
        "carrera": "Administración de Empresas"
    },
    {
        "titulo": "Relaciones Públicas: Estrategias y tácticas <span class=\"libro-edicion\">10 ed</span>",
        "carrera": "Contaduría Pública",
        "link": "https://drive.google.com/file/d/1nhv9LpCgEWc6gbaT6vJQoFzyQNN6DU0e/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "Dennis L. Wilcox, Glen T. Cameron, Jordi Xifra"
    },
    {
        "carrera": "Marketing y Gestión Comercial",
        "titulo": "Administración Financiera I",
        "link": "https://drive.google.com/file/d/1eo4t_L9bwUeznHW0j1x7evVi51JeOUTJ/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "García Santillán Arturo"
    },
    {
        "titulo": "Sistemas de Desigualdades Lineales",
        "link": "https://drive.google.com/file/d/1I5L-o9odUSKraNnRh6lYBjjGTG7babkg/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería en Informática",
        "autor": "A. S. Solodóvnikov"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1nmLuXyeQNkTY79iZy0bvYSFSQNxGp9ju/view",
        "autor": "Material de Referencia",
        "titulo": "Libro de Bolsillo de Atención Cardiovascular de Emergencia",
        "carrera": "Medicina"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1K3N_l7yttYssWJMgFivL8zFN1hRbYaU9/view?usp=sharing",
        "autor": "J. Flórez",
        "titulo": "Fármacos analgésicos opioides",
        "carrera": "Enfermería"
    },
    {
        "autor": "N. Gregory Mankiw",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería Comercial",
        "link": "https://drive.google.com/file/d/1Imj6XSx74bfI2NpgJueCogJoZxcC8m7g/view?usp=sharing",
        "titulo": "Principios de la Economía"
    },
    {
        "link": "https://drive.google.com/file/d/1ezdNIfMVtFjhcSCW4z2VQbi4ULbBegPn/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "titulo": "SI DE ACUERDO! Como Negociar Sin Ceder",
        "carrera": "Relaciones Internacionales",
        "autor": "Roger Fisher y William Ury con Bruce M. Patton"
    },
    {
        "titulo": "La gobernabilidad mundial y sus críticos",
        "link": "https://drive.google.com/file/d/1FIVdmKwG7yw9sWaMr0arZCQBccm9OqOL/view?usp=sharing",
        "carrera": "Ciencias Políticas",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "Pierre de Senarclens"
    },
    {
        "autor": "Idalberto Chiavenato",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1WKxgF-kc2T3-JoK4TPe6KMBH9FBYjmSV/view?usp=sharing",
        "carrera": "Administración de Empresas",
        "titulo": "ADMINISTRACIÓN DE RECURSOS HUMANOS <span class=\"libro-edicion\">5ed</span>"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "Andy HARGREAVES y Michael FULLAN",
        "titulo": "Capital profesional: Transformar la enseñanza en cada escuela",
        "link": "https://drive.google.com/file/d/19baPhNCGZL1j4b_XRXK114MhJei4W3Su/view?usp=sharing",
        "carrera": "Contaduría Pública"
    },
    {
        "titulo": "Dirección y organización de empresas turísticas <span class=\"libro-edicion\">2 ed</span>",
        "link": "https://drive.google.com/file/d/1UJDPDBhtnQcr6fYiQPT5y8009rE22jLO/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Contaduría Pública",
        "autor": "MARÍA ÁNGELES GALLEGO ÁGUEDA, CRISTÓBAL CASANUEVA ROCHA"
    },
    {
        "carrera": "Marketing y Gestión Comercial",
        "titulo": "Probabilidad y Estadística II: Cuadernillo de actividades de aprendizaje",
        "link": "https://drive.google.com/file/d/1aTYuqVgLYlfBIlit-nXEv6OYn_mdCMlN/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "S/A"
    },
    {
        "titulo": "Biología <span class=\"libro-edicion\">9ed</span>",
        "carrera": "Nutrición",
        "link": "https://drive.google.com/file/d/1w3WJuH7lYF5v84LmKdnb39Hz6HP7v5IC/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80",
        "autor": "Paul R. Solomon"
    },
    {
        "link": "https://drive.google.com/file/d/1bc6vdNhWzsUSQWj_WGMdZVpQdeb_8qw0/view?usp=sharing",
        "autor": "Simon L. Dolan, Ramón Valle Cabrera, Susan E. Jackson y Randall S. Schuler",
        "titulo": "LA GESTIÓN DE LOS RECURSOS HUMANOS: Cómo atraer, retener y desarrollar con éxito el capital humano en tiempos de transformación <span class=\"libro-edicion\">3ed</span>",
        "carrera": "Comercio Internacional",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/1r9uPFU2adg0kyevJa4TG2440OyrQIIZV/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "H. Koontz",
        "titulo": "Administración una perspectiva global",
        "carrera": "Contaduría Pública"
    },
    {
        "titulo": "Analisis Matemático II",
        "autor": "Moisés Lazaro",
        "link": "https://drive.google.com/file/d/1xY74qrq9qkzKljJTOicMD2E25IoOUGeJ/view?usp=sharing",
        "carrera": "Ingeniería en Informática",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "Antonio Blanco",
        "carrera": "Nutrición",
        "titulo": "Química Biológica <span class=\"libro-edicion\">8ed</span>",
        "link": "https://drive.google.com/file/d/1v1nebQJtehBkHhMNJ_1DJlIdDdlWmoH-/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "titulo": "Dirección de marketing <span class=\"libro-edicion\">15 ed</span>",
        "autor": "PHILIP KOTLER, KEVIN LANE KELLER",
        "carrera": "Ingeniería Comercial",
        "link": "https://drive.google.com/file/d/10TvRb6AID2IqCCGOuokbniTKQKjo8C2f/view?usp=sharing"
    },
    {
        "titulo": "Burocracias y violencia: Estudios de antropología jurídica",
        "link": "https://drive.google.com/file/d/1t9DyTmzlOwYuoA2Hlp3h_VD5zkELoHjq/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "carrera": "Derecho",
        "autor": "Sofía Tiscornia (et al)"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "autor": "A. I. Kostrikin",
        "link": "https://drive.google.com/file/d/1lA8HZ5DAz6fqHsZNFGKxF-xqVyblAg6J/view?usp=sharing",
        "carrera": "Ingeniería en Informática",
        "titulo": "Introducción al Álgebra"
    },
    {
        "autor": "J. N. Boada",
        "titulo": "Farmacología dermatológica",
        "carrera": "Enfermería",
        "link": "https://drive.google.com/file/d/1ja7U6n3dBRSROQfXYlFW_gmAWTntu6iX/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "Econ. Marcelo Abad V.",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/18G9fGiOc83TvIERZonQPHe_CwNAmtujY/view?usp=sharing",
        "titulo": "LA ADMINISTRACIÓN DEL CAMBIO ORGANIZACIONAL Y SU VINCULACIÓN  CON EL LIDERAZGO",
        "carrera": "Comercio Internacional"
    },
    {
        "carrera": "Enfermería",
        "titulo": "Hormonas tiroideas y fármacos antitiroideos",
        "link": "https://drive.google.com/file/d/1zsxu26Hr6tW2J6R7ypbBBS_t-N8yedIX/view?usp=sharing",
        "autor": "J. A. Amado y J. Flórez",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "Juan Carlos E. Vargas A.",
        "titulo": "EL DERECHO INTERNACIONAL ECONÓMICO",
        "carrera": "Ciencias Políticas",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1j_Vuj71boPU43bBsMXgEbJAy4FvtknWV/view?usp=sharing"
    },
    {
        "carrera": "Medicina",
        "titulo": "APÉNDICE I",
        "autor": "S/A",
        "link": "https://drive.google.com/file/d/1VlfX5FwqxJzfVHygPggMcrLDyV5lF09O/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "John L. Kelley - Ed. Norma",
        "carrera": "Ingeniería en Informática",
        "titulo": "Introducción Moderna al Álgebra",
        "link": "https://drive.google.com/file/d/1sl4ZjjI5Mj1VYb_QV259OC6GKTlZOi0W/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "S/A",
        "carrera": "Marketing y Gestión Comercial",
        "titulo": "Economía II",
        "link": "https://drive.google.com/file/d/15fmo5yWPA76jBigN97lzhT_grpxN3i0B/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "Harnoldo Elorza",
        "carrera": "Marketing y Gestión Comercial",
        "titulo": "ESTADÍSTICA: para las Ciencias Sociales y del Comportamiento",
        "link": "https://drive.google.com/file/d/1N8dfKR8CMwDdGyO-mBaxTSmKql9sR-_h/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería en Informática",
        "autor": "Swokowski & Cole",
        "link": "https://drive.google.com/file/d/17c6r6R78wD5185mHUKZaJOBLTDbf7VDn/view?usp=sharing",
        "titulo": "Álgebra y Trigonometría con Geometría Analítica"
    },
    {
        "titulo": "Derecho Empresarial I",
        "carrera": "Marketing y Gestión Comercial",
        "link": "https://drive.google.com/file/d/1mYS6A67wUXvov63MDiJOMC6o25QdwucX/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "Abog. Luis Guillermo Rojas García"
    },
    {
        "carrera": "Medicina",
        "imagen": "https://images.unsplash.com/photo-1559757175-5700efe6732a?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1RHbkm5BhJm1s6SJRasVR-imowmFoglQS/view",
        "titulo": "Anatomía Humana <span class=\"libro-edicion\">6TA EDICIÓN</span>",
        "autor": "Frederic H. Martini"
    },
    {
        "autor": "V. G. Boltianski",
        "carrera": "Ingeniería en Informática",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1TtG5HvDsZMLAWVy0zVs-bd5jB8fdj41j/view?usp=sharing",
        "titulo": "La Envolvente"
    },
    {
        "link": "https://drive.google.com/file/d/19ScsInLBaOGSSuywaYbJIdiEp4D788bz/view?usp=sharing",
        "carrera": "Derecho",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "autor": "Santiago Castro-Gómez y Ramón Grosfoguel",
        "titulo": "El giro decolonial: Reflexiones para una diversidad epistémica más allá del capitalismo global"
    },
    {
        "titulo": "Manual de Epidemiologia Comunitaria",
        "autor": "OSVALDO CANELO, GUILLERMINA CASTRO, INSTITUTO MARIO NEGRI CONZORZIO MARIO NEGRI SUD: DR. GIANNI TOGNONI - DR. HORACIO BARRI",
        "carrera": "Enfermería",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1FpiCkOtjTRTBEJLYWeJAvlGqOU2LxIh8/view?usp=sharing"
    },
    {
        "autor": "Patrick Suppes",
        "titulo": "Teoría Axiomática de Conjuntos",
        "link": "https://drive.google.com/file/d/1kTy0ThcBnVWop6Iafxo14EUhfiMwiPt8/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería en Informática"
    },
    {
        "autor": "MIGUEL MACIAS",
        "titulo": "Cómo Definir tu Modelo de Negocio",
        "link": "https://drive.google.com/file/d/12ZyWQO4QOzTf9h--cl8hyvsd2KNJ43lA/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Marketing y Gestión Comercial"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "carrera": "Administración de Empresas",
        "link": "https://drive.google.com/file/d/1AmRy74OjrVWqH4NUy1zMcgL-RswyjkoW/view?usp=sharing",
        "autor": "Gary Dessler, Ricardo Alfredo Varela Juárez",
        "titulo": "ADMINISTRACIÓN DE RECURSOS HUMANOS: Enfoque latinoamericano <span class=\"libro-edicion\">5 ed</span>"
    },
    {
        "autor": "L. A. Liustérnik",
        "carrera": "Ingeniería en Informática",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/13FdfJvEnNYm0JFWqHkkcFqKkdmWNhJTF/view?usp=sharing",
        "titulo": "Líneas Más Cortas Problemas de Variaciones"
    },
    {
        "titulo": "Cómo rebelarse en la empresa moderna sin perder el puesto de trabajo",
        "carrera": "Contaduría Pública",
        "autor": "JONATHAN LITTMAN MARC HERSHON",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1QVlIeEa-OUn4UKMFHnii-rzvebvqz6xz/view?usp=sharing"
    },
    {
        "carrera": "Nutrición",
        "titulo": "MANUAL BÁSICO DE NUTRICIÓN CLÍNICA Y DIETÉTICA <span class=\"libro-edicion\">2 ed</span>",
        "autor": "Alfonso Mesejo Arizmendi, José Francisco Martínez Valls, Cecilia Martínez Costa",
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1_EOe22tVDzdfu-oyBaN5nwYKrP0Nz-H1/view?usp=sharing"
    },
    {
        "carrera": "Administración de Empresas",
        "autor": "Michael R. Solomon",
        "titulo": "Comportamiento del consumidor <span class=\"libro-edicion\">7 ed</span>",
        "link": "https://drive.google.com/file/d/1JwOgzNTC6qb5Gw78Hw9jxkpv1r0JT9ub/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "J. Flórez y J. Freijanes",
        "titulo": "Fármacos hipolipoproteinemiantes. Control de la obesidad",
        "carrera": "Enfermería",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/18SCzqVPMKnWVRUmlyAi4lIynpXPnYT3L/view?usp=sharing"
    },
    {
        "titulo": "Temas Selectos de Matemáticas Elementales",
        "link": "https://drive.google.com/file/d/1rBtqlLjKa3RUMlcXPb7H8nuVSMtiweQN/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería en Informática",
        "autor": "G. Dorofeiev y Otros"
    },
    {
        "titulo": "Economía internacional: Teoría y política <span class=\"libro-edicion\">9° ED</span>",
        "link": "https://drive.google.com/file/d/12I613RGxhNZp9y2slrE1yjLUZgNB03ZC/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Relaciones Internacionales",
        "autor": "Paul R. Krugman (et al)"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/18754gCZfy4PG65RxZbQwhwhwJAloF5tC/view?usp=sharing",
        "titulo": "DICCIONARIO DE EMAIL MARKETING",
        "carrera": "Marketing y Gestión Comercial",
        "autor": "Alvaro Campuzano Campos"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "carrera": "Derecho",
        "link": "https://drive.google.com/file/d/1haEvsqbv7wxLyBPzk4p_p52eJnz7DPCx/view?usp=sharing",
        "titulo": "LOS «NO LUGARES» ESPACIOS DEL ANONIMATO: Una antropología de la Sobremodernidad",
        "autor": "Marc Auge"
    },
    {
        "carrera": "Relaciones Internacionales",
        "titulo": "ESTUDIOS Y TENDENCIAS DE LA POLÍTICA Y LAS RELACIONES INTERNACIONALES",
        "autor": "Fabio Sánchez y Nicolás Liendo",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1Tx0987m2tBLHKRLVrVVB0Yc5Km7g7vuw/view?usp=sharing"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "carrera": "Derecho",
        "link": "https://drive.google.com/file/d/1TAdWhgr_p_Z040Prob2f7TGRvtNLJoWo/view?usp=sharing",
        "autor": "Antonio Arellano Hernández",
        "titulo": "Epistemología de la Antropología: conocimiento, técnica y hominización"
    },
    {
        "link": "https://drive.google.com/file/d/1L1aMdTM7aCz-Up7TEmnw5sBDNXJW9_Dk/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "autor": "L. A. Skorniakov",
        "carrera": "Ingeniería en Informática",
        "titulo": "Sistemas de Ecuaciones Lineales"
    },
    {
        "link": "https://drive.google.com/file/d/1eQTYApwV5xUEJ6_3UgW20ZqekepaBuSl/view?usp=sharing",
        "autor": "Guyton & Hall",
        "titulo": "Tratado de Fisiología Médica <span class=\"libro-edicion\">12 ed</span>",
        "carrera": "Nutrición",
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80"
    },
    {
        "titulo": "CONTABILIDAD DE SOCIEDADES",
        "link": "https://drive.google.com/file/d/1KZNlaXcfJ75fayeRezKiSVBjhj81L-bv/view?usp=sharing",
        "carrera": "Ingeniería en Informática",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "autor": "Xochitl Tamez Martínez"
    },
    {
        "autor": "Henry Kissinger",
        "titulo": "ORDEN MUNDIAL",
        "link": "https://drive.google.com/file/d/1JC7R1N_UVaqBP_CBBlCU_DWzb_vqTsVd/view?usp=sharing",
        "carrera": "Relaciones Internacionales",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "titulo": "LEY N° 213/93  QUE ESTABLECE EL CÓDIGO DEL TRABAJO",
        "carrera": "Derecho",
        "link": "https://drive.google.com/file/d/1V64FK6jDBN1rvmHqOACjbJ2bOzL77BB9/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "autor": "CONGRESO DE LA NACIÓN PARAGUAYA"
    },
    {
        "link": "https://drive.google.com/file/d/10JM9PSDqHtrpoU6NAHZgo-08pJHBjTGC/view",
        "imagen": "https://images.unsplash.com/photo-1559757175-5700efe6732a?auto=format&fit=crop&w=300&q=80",
        "carrera": "Medicina",
        "titulo": "Sobatta Atlas Anatomía Humana <span class=\"libro-edicion\">TOMO 1</span>",
        "autor": "Cabeza, cuello y miembro superior"
    },
    {
        "autor": "Jay Heizer, Barry Render",
        "titulo": "DIRECCIÓN DE LA PRODUCCIÓN  Y DE OPERACIONES: DECISIONES ESTRATÉGICAS",
        "link": "https://drive.google.com/file/d/13fI0pdESki2UxNeuVYJRTM10LoZlH8Ps/view?usp=sharing",
        "carrera": "Comercio Internacional",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/1sgMCcrZQGV4TqhSBpB0TwIFyYCRGYO-E/view?usp=sharing",
        "autor": "A. Badia y J.-E. Baños",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "titulo": "Fármacos bloqueantes de la placa motriz y bloqueantes ganglionares",
        "carrera": "Enfermería"
    },
    {
        "carrera": "Administración de Empresas",
        "titulo": "DIRECCIÓN DE VENTAS: VENDER Y FIDELIZAR EN EL NUEVO MILENIO",
        "link": "https://drive.google.com/file/d/1DTUce_AsqeM87dTAVNRo7x0ygV_JE2uR/view?usp=sharing",
        "autor": "DIONISIO CÁMARA IBAÑEZ y MARÍA SANZ GÓMEZ",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "Carlos Alberto Slosse",
        "titulo": "AUDITORÍA",
        "link": "https://drive.google.com/file/d/1CTCdW5h_ihZVbepexKKuqCP3mYYhIDtR/view?usp=sharing",
        "carrera": "Administración de Empresas",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80"
    },
    {
        "titulo": "Guía práctica de contabilidad para PYMES",
        "carrera": "Administración de Empresas",
        "link": "https://drive.google.com/file/d/1LIMGbhGDRdsGJVm_V5v53Su2Yob3V7sD/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "autor": "FERNANDO SÁNCHEZ, MAYORAL GARCÍA CALVO, (et al)"
    },
    {
        "titulo": "REVISTA ECONOMÍA COMPLEJIDAD SOCIAL: UNA REVISIÓN METODOLÓGICA",
        "carrera": "Comercio Internacional",
        "autor": "INSTITUTO DE INVESTIGACIONES ECONÓMICAS",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1u-Z3ZqvHLcwj1Rfkh8QCJ_1GncL-LYj1/view?usp=sharing"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1MgH62kxqxkgRrn1uxPZVgFjIe_MgxIE-/view?usp=sharing",
        "autor": "Thomas Legler (et al)",
        "titulo": "Introducción a las Relaciones Internacionales",
        "carrera": "Relaciones Internacionales"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/12ZuIBvcSJxlpvHefOD8T1_4JN_v4YF9H/view?usp=sharing",
        "titulo": "Álgebra Lineal <span class=\"libro-edicion\">7MA EDICIÓN</span>",
        "carrera": "Ingeniería en Informática",
        "autor": "Stanley I. Grossman"
    },
    {
        "carrera": "Ingeniería en Informática",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1jdfsR0J_wrmra1g2bQer8Nmu6j1LAaS9/view?usp=sharing",
        "autor": "A. I. Máltsev",
        "titulo": "Fundamentos de Álgebra Lineal"
    },
    {
        "carrera": "Comercio Internacional",
        "titulo": "DIRECCIÓN Y PLANIFICACIÓN ESTRATÉGICAS: EN LAS EMPRESAS Y ORGANIZACIONES",
        "autor": "ANDRÉS FERNÁNDEZ ROMERO",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1q0ByGkEDTZx5I3mxEwj7_Ldh5kJaYApf/view?usp=sharing"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1euvoeNjZBvFP63VrmC86MqAGdKJQ9RTt/view?usp=sharing",
        "carrera": "Nutrición",
        "titulo": "Ética-Conceptos y Problemas",
        "autor": "Ricardo Meliandi"
    },
    {
        "titulo": "Técnicas cualitativas en recursos humanos",
        "link": "https://drive.google.com/file/d/1SQmNfh47NA72ZopuFN_nuIV7UJuHOi4N/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "carrera": "Administración de Empresas",
        "autor": "María Vera, Laura Lorente e Isabel M. a Martínez"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=300&q=80",
        "carrera": "Medicina",
        "autor": "Tortora, Derrickson",
        "titulo": "Principios de Anatomía y Fisiología <span class=\"libro-edicion\">11ª EDICIÓN</span>",
        "link": "https://drive.google.com/file/d/1_qc78NOTCdcR3XixIE8D9-QoJoi9xJnM/view"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Marketing y Gestión Comercial",
        "link": "https://drive.google.com/file/d/1rfQX8pT0BLBmfRESv7SlnGkVrvvvjA1S/view?usp=sharing",
        "titulo": "Administración: Teoría, proceso y práctica <span class=\"libro-edicion\">3 ed</span>",
        "autor": "Idalberto Chiavenato"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1CuVICLq2b1EMX7lmZdbjKuiNKjkgaDgG/view?usp=sharing",
        "titulo": "Desigualdades e inecuaciones",
        "carrera": "Ingeniería en Informática",
        "autor": "Alejandro Flores Osorio"
    },
    {
        "link": "https://drive.google.com/file/d/1-MS5TUDoUl9_Ns7Ob_Z_DDbRuXLKjEDw/view?usp=sharing",
        "autor": "Carlos Omar Martínez Carmona y Margarita Altamirano Vásquez",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Relaciones Internacionales",
        "titulo": "ORGANISMOS INTERNACIONALES Y SU IMPACTO EN EL DESARROLLO DEL COMERCIO EXTERIOR"
    },
    {
        "autor": "Lluis Duch",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1681Jn6t1qaLSF_dY3mHIQjMDDw9B05yj/view?usp=sharing",
        "titulo": "Antropología de la Religión",
        "carrera": "Derecho"
    },
    {
        "autor": "Eduardo José Arnoletto",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "titulo": "CURSO DE TEORÍA POLÍTICA",
        "carrera": "Comercio Internacional",
        "link": "https://drive.google.com/file/d/1flVHg8AMXJ6LK8v-7SwQNdvEmEZr2pJH/view?usp=sharing"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "titulo": "Números Reales",
        "autor": "Moisés Lázaro Carrión",
        "link": "https://drive.google.com/file/d/1iSvKMuvfDcA4Km51iV6FMVUYj_IvVRZS/view?usp=sharing",
        "carrera": "Ingeniería en Informática"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1GfSgutoAPwH_BUBH7uwiwCltNS8C52t_/view?usp=sharing",
        "titulo": "Impuesto a la Renta del Pequeño Contibuyente",
        "carrera": "Derecho",
        "autor": "SET"
    },
    {
        "carrera": "Comercio Internacional",
        "link": "https://drive.google.com/file/d/17DmklPrus8xvSNHm9SyqBjWj1-F7ituK/view?usp=sharing",
        "titulo": "La escuela de los negocios",
        "autor": "Robert T. Kiyosaki",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "titulo": "Bioestadística cualitativa",
        "carrera": "Medicina",
        "autor": "M. Sc. Esteban Egaña Morales",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1CDcH7BrdRLfA0wwCLkLu_LdqOtP0-qi1/view?usp=sharing"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Marketing y Gestión Comercial",
        "titulo": "Metodología de la investigación <span class=\"libro-edicion\">4 ED</span>",
        "autor": "Dr. Roberto Hernández Sampieri",
        "link": "https://drive.google.com/file/d/1HtR8D7qwVJ3AwA6VnkCxyiOPErSoso63/view?usp=sharing"
    },
    {
        "link": "https://drive.google.com/file/d/1UXXHZljvHuhw15sNpZ_idDU0LNqcqcxy/view",
        "autor": "CTO Editorial",
        "titulo": "CTO - Neurología y Neurocirugía",
        "carrera": "Medicina",
        "imagen": "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1msn3NPde-HobgjKuNVJ_Qp7Mg4e1ZfiL/view?usp=sharing",
        "carrera": "Administración de Empresas",
        "titulo": "Comportamiento del consumidor y estrategia de marketing",
        "autor": "J. Paul Peter y Jerry C. Olson"
    },
    {
        "carrera": "Ingeniería en Informática",
        "link": "https://drive.google.com/file/d/1nQGzO5JRwuEMoEdoXORocFCksAaKEcRc/view?usp=sharing",
        "titulo": "Geometria plana y del espacio y trigonometria de Baldor (2011)",
        "autor": "Grupo Editorial Patria",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80"
    },
    {
        "carrera": "Relaciones Internacionales",
        "titulo": "PARA ENTENDER LA ECONOMÍA POLÍTICA",
        "link": "https://drive.google.com/file/d/1sLIyhmRgXWbXQebjYqA2eDcJFNE49LyT/view?usp=sharing",
        "autor": "Valeriano F. García",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "carrera": "Administración de Empresas",
        "titulo": "Logística: Administración de la cadena de suministro <span class=\"libro-edicion\">5 ed</span>",
        "link": "https://drive.google.com/file/d/1ovlSjecLz4xSO0fqoFTx711gX4kjJU_D/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "autor": "Ronald H. Ballou"
    },
    {
        "autor": "José Bello Gutiérrez",
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80",
        "carrera": "Nutrición",
        "link": "https://drive.google.com/file/d/12iKbYRuSbpo5qsho7uNiGvS_k3ePkvyj/view?usp=sharing",
        "titulo": "Ciencia bromatológica: Principios generales de los alimentos"
    },
    {
        "titulo": "CONCEPTOS BÁSICOS DEL DERECHO",
        "carrera": "Derecho",
        "link": "https://drive.google.com/file/d/1AizjhdFnavBAnBpnzJreaB0vgc6BHmo_/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "autor": "Eduardo Antinori"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1Z26GZGd02U83xDESdBwBThi-BzzlaLft/view?usp=sharing",
        "carrera": "Marketing y Gestión Comercial",
        "titulo": "EL TALKING MANAGER: Cómo dirigir personas a través de conversaciones",
        "autor": "Álvaro González-Alorda"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ciencias Políticas",
        "autor": "S/A",
        "titulo": "La OCDE: Organización para la Cooperación y el Desarrollo Económicos",
        "link": "https://drive.google.com/file/d/1fFUS7r0ZRHyiSK6_uz79tRmd34XmPDdL/view?usp=sharing"
    },
    {
        "autor": "Abel Hernández Chávez",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Enfermería",
        "link": "https://drive.google.com/file/d/1BdnycMg8_MClX8Q-lntXEnpPcpEZLkHN/view?usp=sharing",
        "titulo": "FARMACOLOGÍA GENERAL. UNA GUÍA DE ESTUDIO"
    },
    {
        "autor": "Marc Augé",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/12vrj8IQhy-oyfko84hh-gXRstg_eakzy/view?usp=sharing",
        "carrera": "Derecho",
        "titulo": "¿POR QUÉ VIVIMOS?"
    },
    {
        "titulo": "Problemas de las Matemáticas Superiores I",
        "link": "https://drive.google.com/file/d/1iADecCbNZ9fSm56F_8XZ3Ntu0erXEZMI/view?usp=sharing",
        "autor": "A. Efimov y Otros",
        "carrera": "Ingeniería en Informática",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "Luis Arturo Rivas Tovar",
        "titulo": "ELABORACIÓN  DE TESIS",
        "link": "https://drive.google.com/file/d/1vQprGK5ci8KX-KzJFNtfS2DwFHnwBYhT/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Relaciones Internacionales"
    },
    {
        "autor": "Rita Laura Segato",
        "titulo": "LAS ESTRUCTURAS ELEMENTALES DE LA VIOLENCIA",
        "link": "https://drive.google.com/file/d/1gxYQnmkxDv6JG1IwMtcBpGhsEuFdAyW2/view?usp=sharing",
        "carrera": "Derecho",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "Julieta H. Heduvan1",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Relaciones Internacionales",
        "link": "https://drive.google.com/file/d/1CFI1IjmNJqXnQVE9NQjktUvr-lbKvHLL/view?usp=sharing",
        "titulo": "Veinte años de política exterior paraguaya."
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1TErTDx8RyfiA-p6ZF45TqqcMhsAKszMk/view?usp=sharing",
        "titulo": "Fármacos antidepresivos y antimaníacos",
        "carrera": "Enfermería",
        "autor": "J. del Río"
    },
    {
        "titulo": "Física",
        "carrera": "Ingeniería en Informática",
        "link": "https://drive.google.com/file/d/1oYCodBv8rFbX9gc0mYfl8CXA2vJRh-eY/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "autor": "Francis Sears, Mark Zemansky"
    },
    {
        "carrera": "Marketing y Gestión Comercial",
        "titulo": "Marketing de fidelización",
        "autor": "BLANCA GARCÍA GÓMEZ, ANA GUTIÉRREZ ARRANZ",
        "link": "https://drive.google.com/file/d/1woSBKWs340KanHlthEsx0iU0zZ0UINMb/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1ykVMAXdq14d2TYmUaDim-5Mpy0lRe-Oa/view?usp=sharing",
        "autor": "Francisco Javier Calleja Bernal",
        "titulo": "Contabilidad I",
        "carrera": "Administración de Empresas"
    },
    {
        "titulo": "Nutrición y vida activa",
        "carrera": "Nutrición",
        "link": "https://drive.google.com/file/d/1ziC8oqcPJSFdCH83QBcSVTgorZmvRdyE/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80",
        "autor": "Wilma B. Freire"
    },
    {
        "titulo": "Más allá de la competencia: La creación de nuevos valores y objetivos",
        "link": "https://drive.google.com/file/d/1ic1dXGHlIjwjtAaV1R_V5IQsqdzg7H0v/view?usp=sharing",
        "autor": "Edward de Bono",
        "carrera": "Comercio Internacional",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/1KkGc_HAyf-ToLoMvHvBHVtZpwAevPl0x/view?usp=sharing",
        "carrera": "Ingeniería en Informática",
        "titulo": "De cuántas formas (Combinatoria)",
        "autor": "N. Vilenkin",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "A. Pazos",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1Ke-hnHBl1GOAYlsRbxRLp-k-pqU26qFM/view?usp=sharing",
        "carrera": "Enfermería",
        "titulo": "Acciones de los fármacos I. Interacciones fármaco y receptor"
    },
    {
        "autor": "Francisco Orts Alberdi",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "carrera": "Derecho",
        "link": "https://drive.google.com/file/d/1UYoJPwKda6WfZK-fIpIUks_1CeoEmU3o/view?usp=sharing",
        "titulo": "DELITOS DE COMISIÓN POR OMISIÓN"
    },
    {
        "autor": "SERGIO GARCÍA RAMÍREZ",
        "carrera": "Derecho",
        "titulo": "ÉTICA Y DERECHO",
        "link": "https://drive.google.com/file/d/1jPT5QvhlJTwQzmNwykq8V-tXerpCIZWR/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "Ron Ritchhart, Mark Church, Karin Morrison",
        "titulo": "Hacer visible el pensamiento",
        "link": "https://drive.google.com/file/d/1pg8y87T_6wadapRFlhmiSMUS0UP2nUB-/view?usp=sharing",
        "carrera": "Contaduría Pública",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "titulo": "Gestión de incompetentes",
        "autor": "Gabriel Ginebra",
        "carrera": "Marketing y Gestión Comercial",
        "link": "https://drive.google.com/file/d/13pyi8wYo9Fg5WJV1u_1t0E6kwfPRpYp0/view?usp=sharing"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "Lic. Alejandro de Jesús Salazar Ortega",
        "link": "https://drive.google.com/file/d/1fW9B39P4DgUsxRkzuKdIj69g07v8PoOA/view?usp=sharing",
        "titulo": "Administración Financiera",
        "carrera": "Marketing y Gestión Comercial"
    },
    {
        "autor": "José Jaime López Jiménez",
        "carrera": "Marketing y Gestión Comercial",
        "titulo": "Retos e implicaciones de la integración económica en Asia-Pacífico",
        "link": "https://drive.google.com/file/d/1dpB0XEja2iYW0gDLx7FmhR7ghjSISdZL/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "Michael Parkin",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "carrera": "Administración de Empresas",
        "link": "https://drive.google.com/file/d/1sm8FTLv0tteYBjj5Byau7HaQZTSTMMvP/view?usp=sharing",
        "titulo": "Economía <span class=\"libro-edicion\">11 ed</span>"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80",
        "carrera": "Nutrición",
        "autor": "Varios Autores",
        "titulo": "Comunicar-Educación en Valores y Medios de Comunicación",
        "link": "https://drive.google.com/file/d/1U_mBirNKjIRdS8_8XJ8nShxqMjhJuHRq/view?usp=sharing"
    },
    {
        "titulo": "Comportamiento organizacional",
        "link": "https://drive.google.com/file/d/1s35f9K39y-Fcxx62HFNP3anAAy1ODEWb/view?usp=sharing",
        "carrera": "Psicología Organizacional",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "Stephen P Robbins, Timothy A. Judge"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80",
        "autor": "Carpenter, Malcolm B.",
        "link": "https://drive.google.com/file/d/1pp5coqqLZGZDyz0sCa2ZVD519BbvsKoM/view?usp=sharing",
        "carrera": "Nutrición",
        "titulo": "Fundamentos de Neuroanatomía"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1-sGnNLZmlt-6KJVz3IDPbncEADRvylAS/view?usp=sharing",
        "autor": "Arturo García Santillán",
        "titulo": "MATEMÁTICAS FINANCIERAS: para la toma de decisiones",
        "carrera": "Contaduría Pública"
    },
    {
        "link": "https://drive.google.com/file/d/1iwlVaXqEGMAow2FJKEKF759Z3zMbwndc/view?usp=sharing",
        "autor": "Gabriel Barragán Casares",
        "carrera": "Marketing y Gestión Comercial",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "titulo": "Contabilidad II"
    },
    {
        "autor": "Moisés Lázaro",
        "carrera": "Ingeniería en Informática",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1zhpRRqfsYCWHStAhzIyo9mFugBpPMu1b/view?usp=sharing",
        "titulo": "Programación lineal"
    },
    {
        "autor": "John Jantsch",
        "titulo": "Cómo hacer de la consultoría una práctica ridículamente rentable",
        "link": "https://drive.google.com/file/d/1PKDmYjlOamDadPMehPzYn4OVqy2Tr0X8/view?usp=sharing",
        "carrera": "Marketing y Gestión Comercial",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "carrera": "Medicina",
        "titulo": "Atlas de Anatomía Humana por Técnicas de Imagen <span class=\"libro-edicion\">4ª EDICIÓN</span>",
        "autor": "Weir",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1KoHswzuNOtsYiYTd_WDCoYpeMR-O21PD/view"
    },
    {
        "carrera": "Ingeniería en Informática",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1FRK9fZVaJIDvQBTsWv-z4QVXMwkFFdem/view?usp=sharing",
        "autor": "Carlos Nakamura",
        "titulo": "Factorización de polinomios"
    },
    {
        "autor": "María del Carmen González Piano · Walter Howard  Karina Vidal · Carlo Bellin",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1T7DqNrnN5ClOHpXklEsYFKl4hzTutW1F/view?usp=sharing",
        "carrera": "Derecho",
        "titulo": "Manual de Derecho Civil"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "DR. FERDINAND O. OTTOH",
        "link": "https://drive.google.com/file/d/1H77QC2tUUhif0Zomtexxp6OWszmCEuoJ/view?usp=sharing",
        "titulo": "DIPLOMACY AND FOREIGN POLICY",
        "carrera": "Relaciones Internacionales"
    },
    {
        "link": "https://drive.google.com/file/d/18Te64vMFp1vRGHJdBGNwNOn1Cped5f0c/view",
        "titulo": "Anatomía, Fisiología y Fisiopatología",
        "carrera": "Medicina",
        "imagen": "https://images.unsplash.com/photo-1583947215259-38e31be0b51f?auto=format&fit=crop&w=300&q=80",
        "autor": "Sistema Cardiovascular"
    },
    {
        "autor": "J. Flórez",
        "carrera": "Enfermería",
        "titulo": "Acciones de los fármacos II. Mecanismos moleculares",
        "link": "https://drive.google.com/file/d/1pB8GF4q8wL7dGze9m6GUvmTHEkh8fzAv/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/1sds0dwYOHhNM-jE389Lfh2-LwNXgdn14/view?usp=sharing",
        "autor": "Grupo Editorial Patria",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería en Informática",
        "titulo": "Algebra de Baldor (2008)"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ciencias Políticas",
        "link": "https://drive.google.com/file/d/1dwJYFL_wYa9XnNr5YEP9JSMOpqh1JyLa/view?usp=sharing",
        "titulo": "La comunicación oral II",
        "autor": "S/A"
    },
    {
        "link": "https://drive.google.com/file/d/1oy9SB-Kxrrhw0FHAB_yRBxWUPhc0sCN1/view?usp=sharing",
        "titulo": "Cómo Generar Ingresos Pasivos",
        "autor": "Steve Pavlina",
        "carrera": "Marketing y Gestión Comercial",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "Yu. Shashkin",
        "carrera": "Ingeniería en Informática",
        "titulo": "Característica Euleriana",
        "link": "https://drive.google.com/file/d/1lbnutZizZKCwmy5PMvAjfUGn9F_zNX6x/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1YRW6gLQwEJ-5y-XM8MNQfYaoEfcEqz3D/view",
        "titulo": "Anatomía Humana (SNC) Rouviere <span class=\"libro-edicion\">TOMO 4</span>",
        "carrera": "Medicina",
        "autor": "Henri Rouviere, André Delmas"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1CNJGw5Eo8InhDxsNssP25WnhvRQtfUcz/view?usp=sharing",
        "autor": "Warren J. Keegan, Mark C. Green",
        "titulo": "Marketing Internacional",
        "carrera": "Marketing y Gestión Comercial"
    },
    {
        "link": "https://drive.google.com/file/d/1YS-5MeLxbxIzBRAYBIlp31n4KrSxgQYP/view",
        "carrera": "Medicina",
        "autor": "Edward C. Klatt y Vinay Kumar",
        "titulo": "Robbins y Cotran - Repaso de Anatomía Patológica <span class=\"libro-edicion\">4TA EDICIÓN</span>",
        "imagen": "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "MARCELA BENASSINI",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "carrera": "Administración de Empresas",
        "link": "https://drive.google.com/file/d/1IdPvCRcVoLwSM3bZ2hTTL2AnM90xPwM3/view?usp=sharing",
        "titulo": "INTRODUCCIÓN A LA INVESTIGACIÓN DE MERCADOS: Enfoque para América Latina <span class=\"libro-edicion\">2 ed</span>"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1UPvgxWylOvMn0rT5FFBzkIbb5LAI9lSO/view?usp=sharing",
        "carrera": "Nutrición",
        "titulo": "Bioquímica Ilustrada <span class=\"libro-edicion\">29ed</span>",
        "autor": "Varios Autores"
    },
    {
        "carrera": "Derecho",
        "titulo": "Etica y moral y derecho",
        "link": "https://drive.google.com/file/d/1KPZ_XBfA0CdMyzpWRhwQXtg27ESBg-9a/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "autor": "Gustavo Bueno"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Enfermería",
        "link": "https://drive.google.com/file/d/15g0SGBTQarY8Bn0TWWZ6-e82Uh-gDOI4/view?usp=sharing",
        "titulo": "Fármacos antipsicóticos neurolépticos",
        "autor": "J. Flórez"
    },
    {
        "carrera": "Administración de Empresas",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "autor": "María Luz Cacheiro González",
        "titulo": "Formación en instituciones y empresas: cómo planificar, elaborar, y evaluar un plan de formación",
        "link": "https://drive.google.com/file/d/1KCwlRFPebop3EjC9jEkrOc42wUpX9wEW/view?usp=sharing"
    },
    {
        "titulo": "HISTORIA DE LA TEORIA POLITICA",
        "carrera": "Relaciones Internacionales",
        "link": "https://drive.google.com/file/d/1SFNhqbufkeIRvKB2osY_GX3VhMMlhCQ7/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "LIBRO: GEORGE H. SABINE,"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Contaduría Pública",
        "link": "https://drive.google.com/file/d/1BXa_Wd_iM1n9DusaYeGTqL4VU2GeuzkZ/view?usp=sharing",
        "titulo": "Matemáticas para Administración y Economía <span class=\"libro-edicion\">2 ed</span>",
        "autor": "Ernest F. Haeussler, Richard S. Paul"
    },
    {
        "autor": "J. Monti",
        "titulo": "Fármacos hipnóticos",
        "link": "https://drive.google.com/file/d/1ogP_yz8BpBc0ZTfnzkAhslgQJBHOjbnl/view?usp=sharing",
        "carrera": "Enfermería",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "carrera": "Derecho",
        "titulo": "DIAGNÓSTICO SOBRE EL HAMBRE EN SUDZAL, YUCATÁN: UN ENSAYO DE ANTROPOLOGÍA APLICADA",
        "autor": "Guillermo Bonfil Batalla",
        "link": "https://drive.google.com/file/d/11eytI4yb0dCTUIIg6HU2JPnYYNveKFjs/view?usp=sharing"
    },
    {
        "autor": "J. A. Armijo",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Enfermería",
        "link": "https://drive.google.com/file/d/1sZ8LMeCO_wX2vzs1LRGq0p8Pk9Bn0tAX/view?usp=sharing",
        "titulo": "Farmacología clínica: objetivos y metodología"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1thHDlM6TMs4q7V0JW5TlY9uM9aKE5ik5/view?usp=sharing",
        "titulo": "28 líderes de negocios que cambiaron al mundo",
        "carrera": "Marketing y Gestión Comercial",
        "autor": "Rhymer Rigby"
    },
    {
        "link": "https://drive.google.com/file/d/1GJodL9CevFI67JjKuUEfTQaUrXyocttl/view?usp=sharing",
        "carrera": "Administración de Empresas",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "autor": "Alejandro Pardo",
        "titulo": "FUNDAMENTOS DE PRODUCCIÓN Y GESTIÓN DE PROYECTOS AUDIOVISUALES"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería en Informática",
        "link": "https://drive.google.com/file/d/1shI_DmHCouMGZsa0a2vZCRrEhuMnJpeh/view?usp=sharing",
        "titulo": "Álgebra y Análisis de Funciones Elementales",
        "autor": "M. Potápov, V. Alexándrov, P. Pasichenko"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería en Informática",
        "link": "https://drive.google.com/file/d/1cMbsxKn3cR1BrIDIimsQ0F22vkQ-8Gxa/view?usp=sharing",
        "autor": "Seymour Lipschutz",
        "titulo": "Teoría de Conjuntos y temas afines"
    },
    {
        "autor": "Krasner y J.G. Ruggie,",
        "carrera": "Ciencias Políticas",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1JsP_QIn5_b353xNJSqod3VFs4Xrj6PmN/view?usp=sharing",
        "titulo": "Las organizaciones internacionales"
    },
    {
        "link": "https://drive.google.com/file/d/1VnuzkN5r1871Q9stxeAJE0B9TbrB5V3y/view?usp=sharing",
        "autor": "V. A. Uspenski",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería en Informática",
        "titulo": "Máquina de Post"
    },
    {
        "autor": "Jaime Maristany",
        "titulo": "Administración de Recursos Humanos <span class=\"libro-edicion\">2 ed</span>",
        "carrera": "Administración de Empresas",
        "link": "https://drive.google.com/file/d/1j8Z9ti3Z8J6vZNUmyASGtN0vbdlSzNxL/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "Celida Chávez Carrillo",
        "link": "https://drive.google.com/file/d/1BEfkj7yRw1iXiFcI1komCyp7hzpenOx9/view?usp=sharing",
        "titulo": "Diccionario de recursos humanos: Técnicas Organizacionales y Teorías",
        "carrera": "Contaduría Pública"
    },
    {
        "carrera": "Nutrición",
        "link": "https://drive.google.com/file/d/1O94zosnflSF7b722ZjBCD8w6524ivv3h/view?usp=sharing",
        "titulo": "Taller de Lectura y Redacción",
        "autor": "Martha Elba del Río Mendieta, José Eduardo Marrot Chávez, Ana Lidia Rojas Rosell",
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/1W-n738HLO60aw_t7impB_-oqolfxQFQH/view?usp=sharing",
        "autor": "V. B. Lidski y Otros",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería en Informática",
        "titulo": "Problemas de Matemáticas Elementales"
    },
    {
        "autor": "ARTURO MORALES CASTRO, JOSÉ ANTONIO MORALES CASTRO",
        "carrera": "Marketing y Gestión Comercial",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1n420eg2WH-td4wW2VB7WEvuui-TGsvRi/view?usp=sharing",
        "titulo": "PLANEACIÓN FINANCIERA"
    },
    {
        "carrera": "Medicina",
        "autor": "CTO Editorial",
        "titulo": "Manual CTO de Medicina - Neumología <span class=\"libro-edicion\">4.ª EDICIÓN</span>",
        "link": "https://drive.google.com/file/d/1KcahI9PllYHLhE1kWblWD4aVkJPJLa7u/view",
        "imagen": "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "J. Flórez",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1mrQWLlXv2i2I0T2uxMbsBBElN3AsL924/view?usp=sharing",
        "titulo": "Farmacología general del sistema nervioso autónomo",
        "carrera": "Enfermería"
    },
    {
        "titulo": "NEGOCIOS INTERNACIONALES <span class=\"libro-edicion\">8VA EDICIÓN</span>",
        "carrera": "Relaciones Internacionales",
        "link": "https://drive.google.com/file/d/1yigYmVsgUjmQHl7YcQDnfWR_r4LA1s6a/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "Charles Hill"
    },
    {
        "autor": "CONGRESO DE LA NACION PARAGUAYA",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "link": "https://docs.google.com/document/d/11sTh-NVOEXl-AGPsRCRRSFtOgcWswtFw/edit?usp=sharing&ouid=111681295415760948313&rtpof=true&sd=true",
        "titulo": "LEY Nº 422/73",
        "carrera": "Derecho"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1jO60LgSmw7VB1dbFNkKNLg3Lv6d28-0c/view?usp=sharing",
        "titulo": "La gran oportunidad: Claves para liderar la transformación digital en las empresas y en la economía",
        "autor": "José de la Peña, Mosiri Cabezas",
        "carrera": "Comercio Internacional"
    },
    {
        "autor": "Idalberto Chiavenato",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1QrP2gmMRlGnLnKaNfG4Yi-dxHNaaMZ_H/view?usp=sharing",
        "titulo": "Gestión del talento humano <span class=\"libro-edicion\">3 ed</span>",
        "carrera": "Psicología Organizacional"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1R36ZeZ1XtCDcKZ3igr_4zePwL5yF4ULH/view?usp=sharing",
        "autor": "E.D.P. De Robertis",
        "carrera": "Nutrición",
        "titulo": "FUNDAMENTOS DE BIOLOGIA CELULAR Y MOLECULAR"
    },
    {
        "autor": "A. Bouchet, J. Cuilleret",
        "carrera": "Medicina",
        "titulo": "Anatomía Bouchet (Cara, cabeza y órganos de los sentidos)",
        "link": "https://drive.google.com/file/d/1svnIkXK2DK2rPTkFLiSw5E6lOBkTgqr-/view",
        "imagen": "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=300&q=80"
    },
    {
        "titulo": "ESTRATEGIA GLOBAL <span class=\"libro-edicion\">3ª ED</span>",
        "autor": "Mike Peng",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Relaciones Internacionales",
        "link": "https://drive.google.com/file/d/1ReoaYTfNxf3U9zlRDoZCoOIbGZkUVQUP/view?usp=sharing"
    },
    {
        "autor": "Dr. Fernando Quiroz Gutiérrez",
        "carrera": "Medicina",
        "titulo": "Anatomía Humana Quiroz <span class=\"libro-edicion\">TOMO 3</span>",
        "link": "https://drive.google.com/file/d/187mUvGNA6dnS5-BcuA9K05G5JvN3UnIR/view",
        "imagen": "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=300&q=80"
    },
    {
        "carrera": "Ingeniería en Informática",
        "titulo": "Método de Inducción Matemática",
        "link": "https://drive.google.com/file/d/1XFRmtOI9uWvwl2HvdUwM20gIXZT4r37f/view?usp=sharing",
        "autor": "I. S. Sominskim",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1uSgzVm-vhAhsJ280FsRPrmaATVxyXfp9/view?usp=sharing",
        "titulo": "ESTADÍSTICAS MÉDICAS Y DE SALUD PÚBLICA",
        "carrera": "Nutrición",
        "autor": "FAYAD CAMEL V."
    },
    {
        "autor": "Idalberto Chavenato",
        "carrera": "Marketing y Gestión Comercial",
        "titulo": "Administración de Recursos Humanos",
        "link": "https://drive.google.com/file/d/1s6PDwHCsY_eWsr-bBYU-vvj8MTHWG7XO/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1YY2l8qy8qALmB_d-FToe9__B0GZKbxts/view?usp=sharing",
        "titulo": "BLOQUES ECÓNOMICOS: La proliferación de acuerdos de integración regional y la organización mundial del comercio",
        "carrera": "Contaduría Pública",
        "autor": "Pedro Schwartz"
    },
    {
        "autor": "Jose A. Toledo",
        "titulo": "Pensamiento Politico <span class=\"libro-edicion\">Tomo I</span>",
        "carrera": "Relaciones Internacionales",
        "link": "https://drive.google.com/file/d/1Ilc9NTm6wY4-vhzsPL4yPK22S-yG06np/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Marketing y Gestión Comercial",
        "link": "https://drive.google.com/file/d/1kqUBKm2XhDIo9rHiucE-mSwpqRqwmkqJ/view?usp=sharing",
        "autor": "Abel María Cano Morales",
        "titulo": "Contabilidad Gerencial y presupuestaria <span class=\"libro-edicion\">2 ed</span>"
    },
    {
        "autor": "Daniel Kahneman",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1Ezi40S7KlmEd00z_MbFJmv_9tCs98SrE/view?usp=sharing",
        "carrera": "Psicología Organizacional",
        "titulo": "Pensar rápido, pensar despacio"
    },
    {
        "autor": "Andy Stalman",
        "carrera": "Administración de Empresas",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1PpEQg5Sd0RWt7-MVMuhewCdRIrwsER8n/view?usp=sharing",
        "titulo": "Brand Off On: El branding del futuro"
    },
    {
        "titulo": "EDUCACIÓN ALIMENTARIA Y NUTRICIONAL",
        "link": "https://drive.google.com/file/d/1u3aqXaGlm7lwuHIx8Df5UR5pxdGLBlCR/view?usp=sharing",
        "carrera": "Nutrición",
        "autor": "S/A",
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80"
    },
    {
        "carrera": "Medicina",
        "imagen": "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&w=300&q=80",
        "autor": "Henri Rouviere, André Delmas",
        "link": "https://drive.google.com/file/d/17S_hsDiA9ZRPg82AHwAwfZSyQzytceEG/view",
        "titulo": "Anatomía Humana (Miembros) Rouviere <span class=\"libro-edicion\">TOMO 3</span>"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1N8qEpT2wNnr1UVoOhjJMzjMyBBobVtiC/view?usp=sharing",
        "titulo": "Contabilidad y finanzas para dummies",
        "carrera": "Administración de Empresas",
        "autor": "Amat Oriol"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Contaduría Pública",
        "autor": "S/A",
        "titulo": "EL CICLO CONTABLE",
        "link": "https://drive.google.com/file/d/1peH2p7AKwGwpMIDxn-a2RSTX2ZhGXAGQ/view?usp=sharing"
    },
    {
        "autor": "Pierre Vernimmen",
        "carrera": "Relaciones Internacionales",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "titulo": "CORPORATE FINANCE",
        "link": "https://drive.google.com/drive/folders/1hKEe3Qaf7DvVA1k7Ks87N2iVlQPmrhNR?hl=es-419"
    },
    {
        "link": "https://drive.google.com/file/d/1uHXOEIgYczlak52Xu_4jA-PLZq3YLNKv/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "autor": "RUDOLF VON IHERING",
        "carrera": "Derecho",
        "titulo": "LA LUCHA POR EL DERECHO"
    },
    {
        "carrera": "Ingeniería en Informática",
        "titulo": "Diccionario de diseño gráfico y publicidad",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "autor": "S/A",
        "link": "https://drive.google.com/file/d/1WUzTyN-q7Vi7UBImCkuGIn9R5HnZM-MR/view?usp=sharing"
    },
    {
        "carrera": "Medicina",
        "titulo": "Gardner - Anatomía (Portugués)",
        "link": "https://drive.google.com/file/d/1g99Shp5GRi8IuVyNk66irvNMGerW5pl-/view",
        "autor": "Ernest Gardner",
        "imagen": "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/1NSU2UrJWpStfgzZIzQYb6ch97tx5f0t7/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "Jhon James Mora",
        "titulo": "Introducción a la Teoría del Consumidor: De la preferencia a la estimación",
        "carrera": "Comercio Internacional"
    },
    {
        "autor": "CARMELO CATTAFI",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Relaciones Internacionales",
        "link": "https://drive.google.com/file/d/1RmAU_qTWIphAaNDJINg4GQPxHFqEm3j4/view?usp=sharing",
        "titulo": "DERECНО INTERNACIONAL PUBLICO <span class=\"libro-edicion\">VOLUMEN 1</span>"
    },
    {
        "titulo": "Teoría general de la Organización Internacional.",
        "link": "https://drive.google.com/file/d/1i-Zw36GO8lssCSw-BlEuAM2XVGV3JCCI/view?usp=sharing",
        "autor": "Calduch, R.-",
        "carrera": "Ciencias Políticas",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1M7iIhAPxkuGvvJp5VPeJd2H9ymT-Exr-/view?usp=sharing",
        "autor": "S/A",
        "titulo": "La Primera Guerra Mundial",
        "carrera": "Ciencias Políticas"
    },
    {
        "autor": "P. P. Korovkin",
        "titulo": "Desigualdades",
        "link": "https://drive.google.com/file/d/1R0w9yjmdW1RVxyKMv7EKv7uRCSPtEZJM/view?usp=sharing",
        "carrera": "Ingeniería en Informática",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "Raymundo Castillo Bautista, Alejandra Juárez Anguiano",
        "titulo": "Análisis organizacional y de imagen de Asociaciones no lucrativas",
        "carrera": "Marketing y Gestión Comercial",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1qR4k6egKIUvoYIIANSoR42-2E1scgnt2/view?usp=sharing"
    },
    {
        "titulo": "FUNDAMENTOS DE MARKETING <span class=\"libro-edicion\">8 ED</span>",
        "link": "https://drive.google.com/file/d/1R82fYDQfhobaYst9JSVJD27HFCd44dob/view?usp=sharing",
        "carrera": "Marketing y Gestión Comercial",
        "autor": "Philip Kotler, Gary Armstrong",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "AGUSTÍN MEDINA",
        "carrera": "Administración de Empresas",
        "titulo": "Introducción a la publicidad",
        "link": "https://drive.google.com/file/d/1Bvo4Ah8bGnfKHY1qmnz_9PEGw1qER8kG/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/1G2Jf_p5uf_KEctpsdW9CRbJn3qhLP6bl/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "autor": "Catalina Unigarro Solarte",
        "carrera": "Derecho",
        "titulo": "Patrimonio cultural alimentario"
    },
    {
        "autor": "LAWRENCE J. GITMAN, MICHAEL JOEHNK",
        "carrera": "Contaduría Pública",
        "titulo": "FUNDAMENTOS DE INVERSIONES <span class=\"libro-edicion\">10 ed</span>",
        "link": "https://drive.google.com/file/d/1RdxBcvAYpP_sgyVyIX2xUUyYrPP3Pc6d/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1559757175-5700efe6732a?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/14Rr2MEwOObcHqb8BnKRmf-7LWeoFwvC0/view",
        "titulo": "Anatomía Humana 4 en 1",
        "carrera": "Medicina",
        "autor": "L. Testut - A. Latarjet"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1eEMBzyJaZB-D7KJ41r6uv-NAniVpOJi0/view?usp=sharing",
        "titulo": "GLOSARIO: TÉRMINOS UTILIZADOS EN INVESTIGACIÓN CLÍNICA",
        "carrera": "Enfermería",
        "autor": "S/A"
    },
    {
        "link": "https://drive.google.com/file/d/1dNzxW131BahX_HDOPpEfSeotX_SNS1HW/view?usp=sharing",
        "carrera": "Derecho",
        "titulo": "Constitución de la República de Paraguay  (1992)",
        "autor": "Gobierno Nacional",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80"
    },
    {
        "titulo": "Conceptos de ADMINISTRACIÓN <span class=\"libro-edicion\">9 ed</span>",
        "carrera": "Contaduría Pública",
        "link": "https://drive.google.com/file/d/1J4Egz6YLKaDd6fVTQm6pBzjUmOhlCq3B/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "FRED R. DAVID"
    },
    {
        "carrera": "Administración de Empresas",
        "autor": "Lawrence J. Gitman, Chad J. Zutter",
        "titulo": "Principios de Administración financiera <span class=\"libro-edicion\">12 ed</span>",
        "link": "https://drive.google.com/file/d/1RRJDN5R-Qlu1TsCzPo9j2QdQ2t9Hds2J/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/1gWiqCx9fKthj8DSe37M423gYHBEF1gEf/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "titulo": "Desarrollo y comportamiento de motivación en el trabajo",
        "carrera": "Contaduría Pública",
        "autor": "Guscanga Guevara Ma. T."
    },
    {
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1nISRCFhFfrFI7wnjnlIvs0O55IULjWZl/view?usp=sharing",
        "titulo": "Las bases farmacológicas de la TERAPÉUTICA <span class=\"libro-edicion\">11 ED</span>",
        "carrera": "Nutrición",
        "autor": "Goodman & Gilman"
    },
    {
        "autor": "Moisés Lázaro",
        "carrera": "Ingeniería en Informática",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/19B6dwk_bVO-Z1v5NlUxXoLbg4UlCXnrc/view?usp=sharing",
        "titulo": "Sucesiones y Series"
    },
    {
        "titulo": "Estadística para negocios y economía <span class=\"libro-edicion\">11 ed</span>",
        "carrera": "Marketing y Gestión Comercial",
        "link": "https://drive.google.com/file/d/1poUGcLtCp-XkLmvMBHzYokHwYyE6upY2/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "Anderson, Sweeney, Williams"
    },
    {
        "link": "https://drive.google.com/file/d/13BPuEPWI89_8IjBYcaZXoL7fa63ifJj8/view?usp=sharing",
        "titulo": "Finanzas corporativas",
        "autor": "Stephen A. Ross",
        "carrera": "Relaciones Internacionales",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "A. G. García, P. Michelena y L. Gandía",
        "titulo": "Fármacos antagonistas del calcio",
        "carrera": "Enfermería",
        "link": "https://drive.google.com/file/d/1cfF6fva3gTfErhqzasTlvvx3uDHHL_w-/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "carrera": "Ingeniería en Informática",
        "titulo": "Números Complejos",
        "autor": "Lázaro Carrión",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1Jn7H1CmJkL42IUnlQf5ehdnadBXlN6rj/view?usp=sharing"
    },
    {
        "carrera": "Medicina",
        "autor": "José Manuel Gómez Sáez",
        "titulo": "Actualización en Neuroendocrinología",
        "link": "https://drive.google.com/file/d/1BIzddyGxodak6ZdEEF91E8T-otwVD9bB/view",
        "imagen": "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/14tyiT8j5UWIahxgg_5zVgsUlCQa_H8xg/view?usp=sharing",
        "carrera": "Administración de Empresas",
        "titulo": "Introducción a la economía",
        "autor": "Ana Luisa Graue Russek"
    },
    {
        "autor": "OCTAVI FULLAT",
        "carrera": "Derecho",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "titulo": "Homo Educandus: Antropología Filosófica de la Educación",
        "link": "https://drive.google.com/file/d/1AZkAhBHHRWstmz3-fkOF7KUMk34Oi282/view?usp=sharing"
    },
    {
        "carrera": "Nutrición",
        "link": "https://drive.google.com/file/d/17N0LX_6kzjhekzYkV4XffRxmVwySgERM/view?usp=sharing",
        "titulo": "Donde no hay doctor: Una guía para los campesinos que viven lejos de los centros médicos",
        "autor": "David Werner, Carol Thuman, Jane Maxwell",
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80"
    },
    {
        "titulo": "Control de calidad <span class=\"libro-edicion\">8 ed</span>",
        "link": "https://drive.google.com/file/d/11sqIfVNLNmzykLxzDAg2BadoTuUA50kV/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería en Informática",
        "autor": "Dale H.Besterfield"
    },
    {
        "carrera": "Enfermería",
        "titulo": "Fármacos nootropos y neuroprotectores. Farmacología de las conductas anormales",
        "autor": "J. Flórez y M. Dierssen",
        "link": "https://drive.google.com/file/d/1A8IjKwYWKKiXmeqjidY8WAWg7mqYezlv/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Contaduría Pública",
        "autor": "Comité de Normas de Auditoría",
        "titulo": "Código de Ética y Normas de Auditoría",
        "link": "https://drive.google.com/file/d/14gW6HsWZ9znsmyagMoBoZd1MGSIYWzVB/view?usp=sharing"
    },
    {
        "carrera": "Marketing y Gestión Comercial",
        "titulo": "¿Cómo diseñar modelos de negocio? Herramientas de estrategia e innovación",
        "link": "https://drive.google.com/file/d/19xLtjFVNKwKzsVNLZW3Q8uOs1zcydwz4/view?usp=sharing",
        "autor": "Verónica Torras",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "carrera": "Administración de Empresas",
        "titulo": "Administración de la calidad",
        "autor": "Donna C. S. Summers",
        "link": "https://drive.google.com/file/d/1-mZ2StOH7fcx4S9C-99Q9X5E9DBTgIj_/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/125AiYDIGeaiNktG5g2F_lg7Vl6BrPQxb/view?usp=sharing",
        "autor": "S. V. Fomín",
        "titulo": "Sistema de Numeración",
        "carrera": "Ingeniería en Informática",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "CARLOS DE LA ROSA",
        "titulo": "COMO HABLAR EN PUBLICO Y MOTIVAR A LAS PERSONAS",
        "carrera": "Marketing y Gestión Comercial",
        "link": "https://drive.google.com/file/d/186PbfCgXcR8RFYjVBl9MFk_1CuRGINXI/view?usp=sharing"
    },
    {
        "titulo": "LEY N° 294/93: “Evaluación De Impacto Ambiental”",
        "link": "https://docs.google.com/document/d/1_WaS7bEQxNccGtVLQQcHSXegr9UPb5pv/edit?usp=sharing&ouid=111681295415760948313&rtpof=true&sd=true",
        "carrera": "Derecho",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "autor": "CONGRESO DE LA NACIÓN PARAGUAYA"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Enfermería",
        "autor": "Gerald Karp",
        "titulo": "Biología celular y molecular: Conceptos y experimentos <span class=\"libro-edicion\">6 ed</span>",
        "link": "https://drive.google.com/file/d/1APBJSipBTHvNTKg7JI5Ho_PSyBGmF3ox/view?usp=sharing"
    },
    {
        "link": "https://drive.google.com/file/d/1yLdvOJMIWRHFsmnCrcvHL9YMCSpOiSAl/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "autor": "B. I. Argunov - L. A. Skorniakov",
        "titulo": "Teoremas de Configuración",
        "carrera": "Ingeniería en Informática"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1lc7mVMmRBtiWwmmchMplnTIJ37vwALNd/view?usp=sharing",
        "titulo": "S U M A R I O",
        "carrera": "Derecho",
        "autor": "EL CONGRESO DE LA NACION PARAGUAYA"
    },
    {
        "autor": "CONCEPCIÓN ESCOBAR HERNÁNDEZ",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/18r0BE1_Ca-XpaW7rKfaV0wdyrDtjXPFg/view?usp=sharing",
        "carrera": "Ciencias Políticas",
        "titulo": "INSTITUCIONES DE DERECHO INTERNACIONAL PÚBLICO DECIMOCTAVA <span class=\"libro-edicion\">DECIMOCTAVA</span>"
    },
    {
        "autor": "Haroldo Elorza",
        "carrera": "Contaduría Pública",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "titulo": "ESTADÍSTICA CIENCIAS SOCIALES <span class=\"libro-edicion\">2 ed</span>",
        "link": "https://drive.google.com/file/d/1z3oRUJD8ngpXWO-3D7RUJ1fzvLE-hCTa/view?usp=sharing"
    },
    {
        "link": "https://drive.google.com/file/d/1PuHgHiwl6mF_cpO25i1xnQfeai9xgjzC/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "S/A",
        "carrera": "Enfermería",
        "titulo": "APÉNDICE II"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1F-7iW9pLqQbwFscoa_g7LnOHbFyeyWCF/view?usp=sharing",
        "titulo": "Problemas de Álgebra Lineal",
        "carrera": "Ingeniería en Informática",
        "autor": "I. Proskuriakov"
    },
    {
        "carrera": "Ingeniería en Informática",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1acZAAOvxJqew_Za1BxXs8gdkf_2u4tWt/view?usp=sharing",
        "autor": "L. Volkovyski y Otros",
        "titulo": "Problemas Sobre la Teoría de Funciones"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "carrera": "Administración de Empresas",
        "link": "https://drive.google.com/file/d/1gi5Lf0APhaYa31ste0xhMDH7oQFMGFli/view?usp=sharing",
        "titulo": "Técnicas de Mercadotecnia en Internet",
        "autor": "Mercadotecnia En Internet"
    },
    {
        "titulo": "ADMINISTRACIÓN",
        "carrera": "Administración de Empresas",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "autor": "Michael A. Hitt, J. Stewart Black, Lyman W. Porter",
        "link": "https://drive.google.com/file/d/1SGdGqnFiWIvQPHeNFpkTGPw8SH4tgM2M/view?usp=sharing"
    },
    {
        "titulo": "CUIDADOS DE ENFERMERIA EN EL ADULTO MAYOR",
        "carrera": "Enfermería",
        "autor": "S/A",
        "link": "https://drive.google.com/file/d/1LY9jiKMk2ibYKi-K7cO1zMRbBL7ZHMqi/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "Peter F. Drucker",
        "carrera": "Administración de Empresas",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1MduWk2E4OUDEPznnfWpLJlVEF9qhUYs1/view?usp=sharing",
        "titulo": "La gerencia efectiva: Tareas económicas y decisiones arriesgadas"
    },
    {
        "autor": "MARÍA ÁNGELES JIMÉNEZ",
        "carrera": "Marketing y Gestión Comercial",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1JRLxrUF-pdxsXalou2RG9VMuzsprvICY/view?usp=sharing",
        "titulo": "Marketing de los servicios de la salud: para no marketinianos"
    },
    {
        "autor": "S/A",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1C_mcmNDyUqmqUdSb6CVt5JabEkX_2aCi/view?usp=sharing",
        "titulo": "Relacones Internacionales. La teoria de Relaciones Internaconales en y desde el Sur <span class=\"libro-edicion\">Editorial Team</span>",
        "carrera": "Ciencias Políticas"
    },
    {
        "link": "https://drive.google.com/file/d/1e8RXecZcJRi7v336WKQfYSUHbyr8nOMV/view?usp=sharing",
        "carrera": "Administración de Empresas",
        "titulo": "Administración: Una perspectiva global y empresarial",
        "autor": "Harold Koontz, Heinz Weihrich, Mark Cannice",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/1eOsrpau2RzsFw5ulB3QzhVDmAbBOkdo8/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "Josef Ajram",
        "titulo": "Ganar en la bolsa es posible: El método Ajram",
        "carrera": "Contaduría Pública"
    },
    {
        "autor": "Marina Beléndez Vázquez",
        "carrera": "Administración de Empresas",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1DpzdBvs1tMzbD0PsDFvKJvdAK2YLof6z/view?usp=sharing",
        "titulo": "Psicología del Trabajo y de las Organizaciones: Aspectos Conceptuales y Metodológicos"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1QrLBSDPrtZNKQ8l4MXKE3dSdTxhYDuNM/view?usp=sharing",
        "titulo": "Atlas de Anatomia Humana: Estudio Fotográfico del cuerpo <span class=\"libro-edicion\">5° Edición</span>",
        "carrera": "Medicina",
        "autor": "Rohen - Yokochi - Drecoll"
    },
    {
        "link": "https://drive.google.com/file/d/17Ymf63MO7QDBYulu6l_IhcUrp65Og4-V/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "Stephen P. Robbins, Mary Coulter",
        "carrera": "Marketing y Gestión Comercial",
        "titulo": "Administración parte I <span class=\"libro-edicion\">10 ed</span>"
    },
    {
        "link": "https://drive.google.com/file/d/1C4rOpNxvoDSi-9_N7gMzOQxyNRSBD16E/view?usp=sharing",
        "autor": "MAITE GARAIGORDOBIL LANDAZABAL, VANESA MARTÍNEZ-VALDERREY",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Contaduría Pública",
        "titulo": "CYBERPROGRAM 2.0 : Programa de intervención para prevenir y reducir el ciberbullying"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Marketing y Gestión Comercial",
        "autor": "Alejandro Pardo",
        "titulo": "FUNDAMENTOS DE PRODUCCIÓN Y GESTIÓN DE PROYECTOS AUDIOVISUALES",
        "link": "https://drive.google.com/file/d/1JS7I7tjv-WMtYr_3Dsj2-ILl6qYv3Mz1/view?usp=sharing"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "titulo": "Procesos Aleatorios",
        "autor": "Y. Rozanov",
        "carrera": "Ingeniería en Informática",
        "link": "https://drive.google.com/file/d/1F2evLF-vRvBMPh8dROUq9jyGr9H7hWjf/view?usp=sharing"
    },
    {
        "carrera": "Derecho",
        "titulo": "Tratado de Derecho Administrativo: El acto administrativo <span class=\"libro-edicion\">8 ed</span>",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "autor": "AGUSTÍN GORDILLO",
        "link": "https://drive.google.com/file/d/17xu9WTsjypYdRdJbONUmuAflruQKGyvz/view?usp=sharing"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Comercio Internacional",
        "titulo": "Dirección de la producción y operaciones: Decisiones estratégicas",
        "autor": "Daniel Arias Aranda, Beatriz Minguela Rata",
        "link": "https://drive.google.com/file/d/1Ou4Mo_VzCOjCwGSSmoyY1xP-hstDknN7/view?usp=sharing"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1empcRci9UhXItJTEveIITHNsk0rhLz-m/view?usp=sharing",
        "titulo": "Introducción a la Econometría <span class=\"libro-edicion\">3 ed</span>",
        "carrera": "Administración de Empresas",
        "autor": "James H. Stock, Mark W. Watson"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=300&q=80",
        "autor": "Dykes, Watson",
        "titulo": "Cursos Crash: Lo Esencial en Anatomía <span class=\"libro-edicion\">TERCERA EDICIÓN</span>",
        "link": "https://drive.google.com/file/d/1oYHkBJ0UnO9ry8y0nGqumGDYjKcWMrTs/view",
        "carrera": "Medicina"
    },
    {
        "titulo": "Gobernanza global y educación jurídica. Entre la armonización internacional y la inconsistencia teórica",
        "carrera": "Ciencias Políticas",
        "autor": "Cadena Afanador & Cubillos Guzmán, 2012",
        "link": "https://drive.google.com/file/d/1Ioatrwd-yVI04NjVUPWi8F7QtoZzPSbJ/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "carrera": "Enfermería",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1iVG8W1v8anvtT7tgnsFSHPvJw01J_2pf/view?usp=sharing",
        "autor": "J. Flórez y A. M. González",
        "titulo": "Fármacos antagonistas muscarínicos"
    },
    {
        "link": "https://drive.google.com/file/d/1AQjDbBKlzHwMPJXEj6qagx-u_ytG-2MY/view?usp=sharing",
        "carrera": "Enfermería",
        "autor": "J. González Macías y J. Flórez",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "titulo": "Farmacología del calcio y del fósforo, y de su regulación"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "carrera": "Administración de Empresas",
        "link": "https://drive.google.com/file/d/1bWG6qfECxC1B9SKvl32ECJbjdCVyEwCh/view?usp=sharing",
        "titulo": "Humanismo pedagógico",
        "autor": "Pedro Poveda"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "carrera": "Administración de Empresas",
        "link": "https://drive.google.com/file/d/1E7hf7EZ1NQhy6kVKEgJzXLD1zbuD3SDu/view?usp=sharing",
        "titulo": "MATEMÁTICAS FINANCIERAS: PARA LA TOMA DE DECISIONES",
        "autor": "Arturo García Santillán"
    },
    {
        "carrera": "Enfermería",
        "titulo": "Antibióticos macrólidos",
        "link": "https://drive.google.com/file/d/15zBk0j9K9w-8bt7tl0dn0EqRvklYWC1Y/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "A. Mediavilla"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1QhMA0akmrpW-6lSVVM9kazVSptHHdp77/view?usp=sharing",
        "titulo": "Las 5 Disfunciones de Un Equipo",
        "carrera": "Psicología Organizacional",
        "autor": "PATRICK LENCIONI"
    },
    {
        "link": "https://drive.google.com/file/d/1ZlnQS0RcS8oqH4qU4S2Z83iheTeEIGM5/view?usp=sharing",
        "titulo": "Bioestadística",
        "autor": "R. Clifford Blair y Richard A. Taylor",
        "carrera": "Medicina",
        "imagen": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=80"
    },
    {
        "titulo": "Administración <span class=\"libro-edicion\">8ed</span>",
        "carrera": "Administración de Empresas",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "autor": "Stephen P. Robbins",
        "link": "https://drive.google.com/file/d/1CAv441T9eYTw7jWJcg3mL4YDkqyTXcUy/view?usp=sharing"
    },
    {
        "autor": "Maria Elena Torresani",
        "titulo": "Cuidado Nutricional Pediatrico",
        "carrera": "Nutrición",
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1R1DGqRgz3Kgt5Gph1KfJmiQCKtr_KWQN/view?usp=sharing"
    },
    {
        "link": "https://drive.google.com/file/d/1mTqetvCEYuF_0NVWDg55cXCQ_g3rpL0J/view?usp=sharing",
        "carrera": "Marketing y Gestión Comercial",
        "autor": "Facultad de Ciencias Contables y Administrativas",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "titulo": "Contabilidad Gerencial"
    },
    {
        "autor": "Paul R. Krugman, Maurice Obstfeld, Marc J. Melitz",
        "carrera": "Administración de Empresas",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1YB8hcFQBEIdKsnYBzETzvwn_ZUMl2ozV/view?usp=sharing",
        "titulo": "Economía internacional: Teoría y política <span class=\"libro-edicion\">9 ed</span>"
    },
    {
        "link": "https://drive.google.com/file/d/1w0CWTJONqv9X6LHJjJwmjsgQ1CYaYkri/view?usp=sharing",
        "autor": "J. A. Amado y J. Flórez",
        "carrera": "Enfermería",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "titulo": "Hormonas sexuales: estrógenos, gestágenos, andrógenos y anticonceptivos hormonales"
    },
    {
        "carrera": "Administración de Empresas",
        "autor": "RUDOLF VON IHERING",
        "titulo": "LA LUCHA POR EL DERECHO",
        "link": "https://drive.google.com/file/d/1vR-8J3n63HHyj9I-z4EnmfGIUN81pFJ8/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "autor": "Carlos Nakamura",
        "titulo": "División de polinomios",
        "carrera": "Ingeniería en Informática",
        "link": "https://drive.google.com/file/d/1JqFEk5CjZYOf5EJ419jJcOsIxIZY_Bb9/view?usp=sharing"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Marketing y Gestión Comercial",
        "autor": "Prof. Julio Alfonso Martínez Romero",
        "link": "https://drive.google.com/file/d/1WVKOsFX0lqXNhoUCNSQsi96010P2zJbi/view?usp=sharing",
        "titulo": "Registra registros contables"
    },
    {
        "autor": "V. A. Gorbátov",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería en Informática",
        "link": "https://drive.google.com/file/d/16A6CSRqp4mqBNYeWmDqMY-h9cTGUwwD_/view?usp=sharing",
        "titulo": "Fundamentos de la Matemática Discreta"
    },
    {
        "link": "https://drive.google.com/file/d/12qto8oy1lSmegqLW4dnkju4ljBxCAuko/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "autor": "Jack Gido, James P. Clements",
        "carrera": "Ingeniería en Informática",
        "titulo": "Administración: Exitosa de proyectos"
    },
    {
        "autor": "Idalberto Chiavenato",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1uFmqtczhzatoIjfr16YZLQx5p32Ctwbo/view?usp=sharing",
        "carrera": "Administración de Empresas",
        "titulo": "INTRODUCCION A LA TEORIA GENERAL  DE LA ADMINISTRACIÓN <span class=\"libro-edicion\">7 ed</span>"
    },
    {
        "titulo": "Curso de Matemáticas Superiores",
        "autor": "V. A. Kudriávtsev",
        "link": "https://drive.google.com/file/d/1KVmJV1nzgyBYpPaLDpLG9ntbgGNZYUNB/view?usp=sharing",
        "carrera": "Ingeniería en Informática",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80"
    },
    {
        "titulo": "Cómo conseguir el mayor precio para MI  empresa",
        "link": "https://drive.google.com/file/d/1muICVoaD5YyNfJsexge-6cCDqatCjk9q/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "ENRIQUE QUEMADA CLARIANA",
        "carrera": "Contaduría Pública"
    },
    {
        "autor": "Moisés Lázaro",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1KXPPXJlTJwne3accAOI7GTL_z9FUj_dL/view?usp=sharing",
        "titulo": "Inferencia Estadistica",
        "carrera": "Ingeniería en Informática"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Relaciones Internacionales",
        "link": "https://drive.google.com/file/d/1oVsj-kxIl46FXxwRcHqA3bsm3xsY4hdK/view?usp=sharing",
        "titulo": "TEORÍA GENERAL DEL ESTADO",
        "autor": "Franciso Javier Juarez Jonapa"
    },
    {
        "autor": "Idalberto Chiavenato",
        "carrera": "Contaduría Pública",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1WXN64fIe6AnR4aXRj_trnqT89ovGmeuZ/view?usp=sharing",
        "titulo": "Introducción a la Teoría General de la Administración <span class=\"libro-edicion\">7 ed</span>"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1psQJzTVfsNjywduETyCrbHwmS1017a0i/view",
        "carrera": "Medicina",
        "autor": "Frank H. Netter",
        "titulo": "Atlas de Anatomía Humana <span class=\"libro-edicion\">5TA EDICIÓN</span>"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "carrera": "Administración de Empresas",
        "autor": "Lluis Argemí de Abadal, Javier Casares Ripol, (et al)",
        "titulo": "Historia del Pensamiento Económico",
        "link": "https://drive.google.com/file/d/1jQcGbbNQsfxPvruXH13kws_3tQbpw6AT/view?usp=sharing"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería en Informática",
        "titulo": "Teoría de las Funciones Analíticas - Tomo I",
        "autor": "A. Markushevich",
        "link": "https://drive.google.com/file/d/1AObPYgu5mxJ2aETyRn459GN8OO6qdh-6/view?usp=sharing"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería en Informática",
        "autor": "V. S. Shipachev",
        "titulo": "Fundamentos de las Matemáticas Superiores",
        "link": "https://drive.google.com/file/d/1l86Eaf0dy_Vo2hDa8fG3Zp4EetjdGojh/view?usp=sharing"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=300&q=80",
        "autor": "Luis Cabeza Osorio",
        "link": "https://drive.google.com/file/d/1BLLxetD5vSof5sGVAKF99v9_bgSMimSW/view",
        "carrera": "Medicina",
        "titulo": "Manual CTO de Medicina - Reumatología <span class=\"libro-edicion\">4.ª EDICIÓN</span>"
    },
    {
        "titulo": "Perfiles Históricos de la Amazonía Peruana",
        "autor": "JESUS VICTOR SAN ROMAN",
        "link": "https://drive.google.com/file/d/1hboe51MfwWbTLuLGLN7WEDhEzMCY9_6V/view?usp=sharing",
        "carrera": "Derecho",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80"
    },
    {
        "titulo": "Comportamiento organizacional: La dinámica del éxito en las organizaciones <span class=\"libro-edicion\">2 ED</span>",
        "carrera": "Psicología Organizacional",
        "autor": "IDALBERTO CHIAVENATO",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1mPYznzSDzQCBz6iCioQvt1E6NvP51ETL/view?usp=sharing"
    },
    {
        "titulo": "Productos notables",
        "link": "https://drive.google.com/file/d/1_V3Dnm57OkpcgJ-0h3dl9IcMQ5LBVY8q/view?usp=sharing",
        "autor": "Carlos Nakamura",
        "carrera": "Ingeniería en Informática",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "0WEN R. FENNEMA, STEVEN R. TANNENBAUM",
        "titulo": "Introducción a la Química de los Alimentos",
        "link": "https://drive.google.com/file/d/15Ig-j9q31b8n0g_5eZVZiiNq08q9e5m6/view?usp=sharing",
        "carrera": "Nutrición",
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80"
    },
    {
        "titulo": "ECONOMÍA EMPRESARIAL",
        "carrera": "Marketing y Gestión Comercial",
        "link": "https://drive.google.com/file/d/12T-77W1R5L_GfS94d_IJZHR3CJzbw1-p/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "TOSCANO HERNANDEZ RICARDO MAURICIO, CAMACHO VEINTIMILLA DIEGO ERNESTO, VACA ZARATE CARLOS ANIBAL, RODAS IDROBO ROSA AMADA"
    },
    {
        "titulo": "Como usar el cerebro: Para mejorar la calidad y acelerar el aprendizaje",
        "link": "https://drive.google.com/file/d/1uZV_ZMmBmfeu9KUHc8CKw75xO_l4ax3V/view?usp=sharing",
        "carrera": "Administración de Empresas",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "autor": "Steve Garnett"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?auto=format&fit=crop&w=300&q=80",
        "carrera": "Medicina",
        "link": "https://drive.google.com/file/d/1kI8MHwE4AeNDJw8VgAC8uU8BBDOcTl1v/view",
        "titulo": "Atlas de Anatomía II Órganos Internos <span class=\"libro-edicion\">7ª EDICIÓN</span>",
        "autor": "Werner Platzer"
    },
    {
        "titulo": "Miembro Superior (Imágenes)",
        "link": "https://drive.google.com/file/d/1Zqj7W_6FrurKLbDAje8JAGjbZWpv_tzz/view",
        "carrera": "Medicina",
        "imagen": "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?auto=format&fit=crop&w=300&q=80",
        "autor": "Material Visual"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "titulo": "Antisépticos generales y locales",
        "autor": "J. Flórez",
        "carrera": "Ingeniería en Informática",
        "link": "https://drive.google.com/file/d/1Ntz7OMX7RZb4_VKhNVWYyTMY4tqjZEoh/view?usp=sharing"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Medicina",
        "link": "https://drive.google.com/file/d/1pibGoDUqBkFojxuuvDBFT01Gn9G6X4Zd/view",
        "titulo": "Anatomía Humana Latarjet <span class=\"libro-edicion\">TOMO 2</span>",
        "autor": "Michel Latarjet, Alfredo Ruiz Liard"
    },
    {
        "autor": "N. N. Vorobiov",
        "titulo": "Números de Fibonacci",
        "link": "https://drive.google.com/file/d/1O4fN5J367mPiebcD9QVVjTCZlQNALfCk/view?usp=sharing",
        "carrera": "Ingeniería en Informática",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80"
    },
    {
        "titulo": "LA ESTRATEGIA EMPRESARIAL CON MÉTODO",
        "link": "https://drive.google.com/file/d/1A6VW6eN6aXTMACr_Nna0UW8MKb53YjDd/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "carrera": "Administración de Empresas",
        "autor": "Antonio Freije Uriarte e Inmaculada Freije Obregón"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80",
        "carrera": "Nutrición",
        "autor": "Comité de Expertos de la OMS",
        "link": "https://drive.google.com/file/d/1OIO-xTYv5yHHC8tyt6kJoCmsZBk420aT/view?usp=sharing",
        "titulo": "EL ESTADO FÍSICO: USO E INTERPRETACIÓN DE LA ANTROPOMETRÍA"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1M4J0AGdktOkp4NJWk8eYhmBwpfhpEIuh/view?usp=sharing",
        "autor": "Luis Enrique Concepción Montiel",
        "carrera": "Derecho",
        "titulo": "Globalización, democracia y gobernanza global: perspectiva latinoamericana"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "carrera": "Administración de Empresas",
        "autor": "Alvaro Campuzano Campos",
        "titulo": "Las 200 definiciones sobre la herramienta que revoluciona el marketing en Internet",
        "link": "https://drive.google.com/file/d/1AyEw0YXUk-snLRuctMBY9VfA2xxMVpHS/view?usp=sharing"
    },
    {
        "carrera": "Medicina",
        "titulo": "Atlas de Anatomía III Sistema Nervioso <span class=\"libro-edicion\">7ª EDICIÓN</span>",
        "autor": "Werner Platzer",
        "imagen": "https://images.unsplash.com/photo-1583947215259-38e31be0b51f?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1Zo9KDVZho2tTCWn_zvac1JOli4MMlh4p/view"
    },
    {
        "link": "https://drive.google.com/file/d/1zmX0V9-6nVOzlVK31zIfuWmqm1oUZkyE/view?usp=sharing",
        "titulo": "International Relations Theory",
        "carrera": "Relaciones Internacionales",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "STEPHEN McGLINCHEY, ROSIE WALTERS & CHRISTIAN SCHEINPFLUG"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería en Informática",
        "link": "https://drive.google.com/file/d/1AxG_3MhjhByZnYwM9JGxIfp1AbYeeHXR/view?usp=sharing",
        "autor": "N. N. Vorobiov",
        "titulo": "Criterios de Divisibilidad"
    },
    {
        "titulo": "Lo Demostrable e Indemostrable",
        "link": "https://drive.google.com/file/d/19FAmu04DHJDQ7jLPn5JggSaQoDYlSR53/view?usp=sharing",
        "carrera": "Ingeniería en Informática",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "autor": "Yu. I. Manin"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Marketing y Gestión Comercial",
        "autor": "S/A",
        "titulo": "Administración del estado",
        "link": "https://drive.google.com/file/d/1v8XwydXyqtCcgF8BvmKTjFwMCtFFJgOH/view?usp=sharing"
    },
    {
        "titulo": "Atlas Fotográfico de Anatomía",
        "carrera": "Medicina",
        "autor": "Autor General",
        "link": "https://drive.google.com/file/d/1Kc3SLgsCNFq6iuEvx29DawbS72wR7WIp/view",
        "imagen": "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/1XOkqH2IcuVnrXQdhByiBwg2v_2P0I9XD/view?usp=sharing",
        "carrera": "Administración de Empresas",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "titulo": "Miradas globales para otra economía",
        "autor": "Pablo Guerra"
    },
    {
        "autor": "S/A",
        "carrera": "Marketing y Gestión Comercial",
        "titulo": "100 consejos de marketing digital",
        "link": "https://drive.google.com/file/d/1AdYJGykZ60LpUFNnrA46jR8WmQNAVG-U/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "Varios Autores",
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80",
        "carrera": "Nutrición",
        "titulo": "Guías alimentarias para la población",
        "link": "https://drive.google.com/file/d/1mOEDOKZm71b_mRAY0ReVlKQ0XkzvJzku/view?usp=sharing"
    },
    {
        "titulo": "Lógica y teoría de conjuntos",
        "link": "https://drive.google.com/file/d/1WlduXHp4lnUFfvhwN_GIRgG79_ksTCNe/view?usp=sharing",
        "carrera": "Ingeniería en Informática",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "autor": "Moisés Lázaro"
    },
    {
        "autor": "Stephen P. Robbins, Mary Coulter",
        "titulo": "Administración <span class=\"libro-edicion\">10ed</span>",
        "carrera": "Administración de Empresas",
        "link": "https://drive.google.com/file/d/1j_Lw8EiAm406eQbrf0onGU15NFC0pzrv/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80"
    },
    {
        "titulo": "Sucesiones Recurrentes",
        "carrera": "Ingeniería en Informática",
        "autor": "A. I. Kostrikin",
        "link": "https://drive.google.com/file/d/1AN6eCyvlx7IpSVyN1qz3J0bMpNzEM1Tm/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80"
    },
    {
        "titulo": "Mediadores celulares II. Eicosanoides, óxido nítrico y factor activador de las plaquetas",
        "autor": "J. V. Esplugues y P. López-Jaramillo",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Enfermería",
        "link": "https://drive.google.com/file/d/1D5BE3RmJsO4C6fbzM61vTSwHooY6p1b0/view?usp=sharing"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1rFo8s3CKaAoPiv9pr8oGjVWHy89rIBZH/view?usp=sharing",
        "titulo": "El diario de Ana Frank",
        "autor": "Anne Frank",
        "carrera": "Administración de Empresas"
    },
    {
        "autor": "Julio César Ceniceros Angulo",
        "titulo": "INTRODUCCIÓN A LA DIFERENCIACIÓN DE PRODUCTOS",
        "link": "https://drive.google.com/file/d/1nOZe1t68S3dZu06fzvJPJ_lDkHuCwngP/view?usp=sharing",
        "carrera": "Comercio Internacional",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "Joaquín Retamosa Granado, Álvaro Tejero Cantero, Pablo Ruiz Múzquiz",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/137418QV8qN7VjPqKz_NOw-MdNcUCgx3c/view?usp=sharing",
        "carrera": "Ingeniería en Informática",
        "titulo": "Introducción a la Física Cuántica"
    },
    {
        "autor": "Fernando Elías López de Castilla",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1z38H64GTgncggkg7hwTertZ6uxGES4DR/view?usp=sharing",
        "carrera": "Comercio Internacional",
        "titulo": "La biblia de las franquicias ¿Acaso esta historia comenzó con una Hamburguesa?"
    },
    {
        "autor": "Claudia Aguilar Garza",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1d574Vjpbpf-wXu8rR9saJh9ZiN2J5p18/view?usp=sharing",
        "carrera": "Relaciones Internacionales",
        "titulo": "gestión de la cooperación triangular en iberoamérica"
    },
    {
        "titulo": "Fármacos antitusígenos, mucolíticos, surfactante pulmonar y estimulantes de la respiración",
        "link": "https://drive.google.com/file/d/1CNsa3xVIcZytflEMXTOGYDDnNDlTmFFV/view?usp=sharing",
        "autor": "J. Flórez",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Enfermería"
    },
    {
        "autor": "Pedro Rubio Domínguez",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1Sxmjzos8Br3LKi4reutYyC1nY3bUYJDX/view?usp=sharing",
        "titulo": "¿Cómo llegar a ser un experto en Marketing?",
        "carrera": "Marketing y Gestión Comercial"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "carrera": "Administración de Empresas",
        "link": "https://drive.google.com/file/d/1DRJB_uchH0aF3WiBafnDhhQdR9oEvT31/view?usp=sharing",
        "titulo": "Cómo Pensar Estratégicamente en las Empresas",
        "autor": "KENICHI OHMAE Y MICHELE BECHTELL"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "carrera": "Administración de Empresas",
        "autor": "Carlos Mármol y José María Rondón",
        "titulo": "Hombres de Fortuna",
        "link": "https://drive.google.com/file/d/1FHIb54ddFgxcRx6XrCsW9lUsTNfMF0EE/view?usp=sharing"
    },
    {
        "carrera": "Derecho",
        "titulo": "Representación y cultura audiovisual en la sociedad contemporánea",
        "autor": "Elisenda Ardèvol y Nora Muntañola",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1eQooyx-_6Ci9MCfHNdD3SrAK4FL69wMc/view?usp=sharing"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería en Informática",
        "autor": "V. V. Voevodin - MIR",
        "link": "https://drive.google.com/file/d/1ffS6Gokm4rR7ZgYd-9SKmXecMC5znqg9/view?usp=sharing",
        "titulo": "Álgebra Lineal"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1Lc6DCiBvq92HFP8clfB8erdnNy3KGVJ6/view?usp=sharing",
        "titulo": "ANALISIS MATEMATICO LIMITES Y CONTINUIDAD",
        "carrera": "Ingeniería en Informática",
        "autor": "Moises Lazaro"
    },
    {
        "titulo": "Dirección estratégica de Recursos Humanos Gestión por competencias",
        "carrera": "Comercio Internacional",
        "autor": "MARTHA ALICIA ALLES",
        "link": "https://drive.google.com/file/d/17WHN9VU1TfSb0bG_YdsZp_jMjdFYaeoK/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "Sociedades Canarias de Pediatría, Dirección General de Salud Pública del Servicio Canario de la Salud",
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/19Qte6UTZgfXxI4Pe7KVz5vQE-icjozOf/view?usp=sharing",
        "carrera": "Nutrición",
        "titulo": "Pautas de alimentación y actividad física"
    },
    {
        "carrera": "Marketing y Gestión Comercial",
        "titulo": "Comunicación corporativa: Claves y escenarios",
        "link": "https://drive.google.com/file/d/1H4xVsdkUj7KGqDrZ0mzyotn_NhwKidcj/view?usp=sharing",
        "autor": "Miguel Túñez López, Carmen Costa-Sánchez",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "titulo": "Protocolo de seguridad de los pacientes en los cuidados de enfermería",
        "carrera": "Enfermería",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "S/A",
        "link": "https://drive.google.com/file/d/1JRX1J10_7fkdsKXDVecO9mTKo92_jMbH/view?usp=sharing"
    },
    {
        "carrera": "Marketing y Gestión Comercial",
        "titulo": "COMO ELABORAR UN PLAN DE NEGOCIOS",
        "autor": "OSCAR BRAVO PELÁEZ",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1zuP413bjLCjWiwFzsKPL-e7gIICH6S3f/view?usp=sharing"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Material de Estudio",
        "titulo": "Pelvis y Periné",
        "carrera": "Medicina",
        "link": "https://drive.google.com/file/d/1INbLrGVu7Ys7Cvb0PEfxx4fxMRx9dmM-/view?usp=sharing"
    },
    {
        "link": "https://drive.google.com/file/d/1Nz5BMLYql87ltEiM_glRiC6nHadkGERu/view?usp=sharing",
        "titulo": "ORGANIZATIONAL BEHAVIOR",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Relaciones Internacionales",
        "autor": "McSHANE | VON GLINOW"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/11GTJQAPWVF9zIu3yGyAVyfgCj_kHNhB-/view?usp=sharing",
        "titulo": "Vocabulario sobre redes sociales:  Adéntrate en cada red social conociendo su jerga",
        "carrera": "Marketing y Gestión Comercial",
        "autor": "S/A|"
    },
    {
        "autor": "A. A. Belski - L. A. Kaluzhnin",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1I4C3owgokJrFBG7A7BgYdGyieKu5DptB/view?usp=sharing",
        "carrera": "Ingeniería en Informática",
        "titulo": "Division Inexacta"
    },
    {
        "carrera": "Derecho",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "titulo": "La Antropología Social en perspectiva",
        "autor": "Hector Díaz Polanco",
        "link": "https://drive.google.com/file/d/1IMb5XGRC9Ie7btxTbJhKnbuhZnq9VJFm/view?usp=sharing"
    },
    {
        "titulo": "CÓMO GANAR DINERO EN WALL STREET",
        "carrera": "Marketing y Gestión Comercial",
        "link": "https://drive.google.com/file/d/1F7Lvqx5cjU76TRpUCbmaiapdJOUl1uWP/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "EDUARDO BOLINCHES"
    },
    {
        "link": "https://drive.google.com/file/d/1K9U2weaEf-h311tIn64CsECFHOYn78hU/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "carrera": "Derecho",
        "autor": "Federico Arnau Moya",
        "titulo": "Lecciones de Derecho Civil II: Obligaciones y contratos"
    },
    {
        "autor": "Christopher Lovelock, Jochen Wirtz",
        "carrera": "Marketing y Gestión Comercial",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1JRLxrUF-pdxsXalou2RG9VMuzsprvICY/view?usp=sharing",
        "titulo": "Marketing de servicios personal, tecnología y estrategia"
    },
    {
        "link": "https://drive.google.com/file/d/1-rrVlMLqF9KiewXj0O6PLerhbPIii0gt/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "autor": "Federico Aguilera Klink y Vicent Alcántara",
        "carrera": "Administración de Empresas",
        "titulo": "De la Economía Ambiental a la Economía Ecológica"
    },
    {
        "autor": "Luis R. Gómez-Mejía, et al.",
        "titulo": "Gestión de recursos humanos <span class=\"libro-edicion\">5 ed</span>",
        "carrera": "Contaduría Pública",
        "link": "https://drive.google.com/file/d/1aXsIm7rV6_CtIwPPWpxyBBcXU0-tW7A5/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "titulo": "Fracciones Maravillosas",
        "autor": "N. Beskin",
        "carrera": "Ingeniería en Informática",
        "link": "https://drive.google.com/file/d/1ieOzDgE-D6aQJPDsjwNKvWWcFjyXvc0g/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/1xUAG1gotprJMrvhMMCnYX22k9hOQXoRa/view?usp=sharing",
        "titulo": "Fundamentos Matemáticos de la Cibernética",
        "autor": "Yu. M. Korshunov",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería en Informática"
    },
    {
        "titulo": "Fármacos antihipertensores",
        "carrera": "Enfermería",
        "autor": "J. Galiana y M. Gil",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1UH0zU414BTrTbU55b_1qraZUi69Mu5Ws/view?usp=sharing"
    },
    {
        "titulo": "Administración parte II <span class=\"libro-edicion\">10 ed</span>",
        "carrera": "Marketing y Gestión Comercial",
        "autor": "Stephen P. Robbins, Mary Coulter",
        "link": "https://drive.google.com/file/d/1itWo3WlegcJbLvINIhhG-yuYi7QXSktV/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "titulo": "Conceptos de Administración Estratégica <span class=\"libro-edicion\">11 ed</span>",
        "carrera": "Ingeniería Comercial",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "Fred R. David",
        "link": "https://drive.google.com/file/d/1z_v4QNTNG1AcUGQHlJRujef5HPG2SQCZ/view?usp=sharing"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Marketing y Gestión Comercial",
        "autor": "JAIME MARISTANY",
        "titulo": "COMO GANAR PODER",
        "link": "https://drive.google.com/file/d/190S2kns5ikPXMO9z2yE40-dUlgKfFbpC/view?usp=sharing"
    },
    {
        "link": "https://drive.google.com/file/d/1fMEFPGs5bv1hXCearOQaQSAu6iEY6KIc/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "A. Mediavilla",
        "titulo": "Antibióticos aminoglucósidos y glucopéptidos",
        "carrera": "Enfermería"
    },
    {
        "carrera": "Administración de Empresas",
        "autor": "Eduardo Loría",
        "titulo": "Econometría con aplicaciones",
        "link": "https://drive.google.com/file/d/10PNDTHWVaqg7npe604aJj2hwjjd-4XSv/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80"
    },
    {
        "titulo": "RECUPERAR LA VISTA: UN CAMINO HACIA LA CLARIDAD VISUAL",
        "autor": "FRANK SUAREZ",
        "link": "https://drive.google.com/file/d/1ENrK9J2QJuHZcFWxksjjROHSB3q5f6PJ/view?usp=sharing",
        "carrera": "Nutrición",
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "S/A",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1_gflqmzB4IdKnfOuFVM2I_B6l8O1B56b/view?usp=sharing",
        "carrera": "Administración de Empresas",
        "titulo": "La comunicación oral II"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "Leon G. Schiffman, Leslie Lazar Kanuk y Joseph Wisenblit",
        "link": "https://drive.google.com/file/d/1q8EyJcZ9Csb3Qg_7v7IbSBXkyjDGxVq1/view?usp=sharing",
        "titulo": "Comportamiento del consumidor",
        "carrera": "Comercio Internacional"
    },
    {
        "titulo": "ARQUITECTURA DE COMPUTADORAS",
        "link": "https://drive.google.com/file/d/1BIcB2d-8fR9XDCSHmxkqOg-hYSPXBpcw/view?usp=sharing",
        "carrera": "Ingeniería en Sistemas",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "David Patricio López Carrillo."
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1MwbV15DF06zl8PkN3mvXfm2Zhrkajmf1/view?usp=sharing",
        "titulo": "Los Algoritmos y la Resolución Automática de Problemas",
        "carrera": "Ingeniería en Informática",
        "autor": "B. A. Trajtenbrot"
    },
    {
        "titulo": "Derecho Laboral",
        "carrera": "Derecho",
        "autor": "LIBIA REYES MENDOZA",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1FEficUFlVbPMD38GAgT2a8tiiqN3T5c8/view?usp=sharing"
    },
    {
        "carrera": "Enfermería",
        "link": "https://drive.google.com/file/d/1xwq8LnbdJ_LaQIq0y6PzUD9KiaJbfjlo/view?usp=sharing",
        "titulo": "Fármacos anestésicos generales",
        "autor": "M. A. Hurlé",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/102tgxldnBkERI4AjAsJjZLt8NtXSuFOZ/view",
        "titulo": "Gray Anatomía para Estudiantes <span class=\"libro-edicion\">SEGUNDA EDICIÓN</span>",
        "autor": "Drake Richard",
        "carrera": "Medicina",
        "imagen": "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?auto=format&fit=crop&w=300&q=80"
    },
    {
        "carrera": "Administración de Empresas",
        "titulo": "ESTADÍSTICA PARA ADMINISTRACIÓN Y ECONOMÍA",
        "link": "https://drive.google.com/file/d/1mZrnZA4nGTKFQL9A3Kov7eE9d9Q0_Yvd/view?usp=sharing",
        "autor": "Richard I. Levin y David S. Rubin",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80"
    },
    {
        "carrera": "Marketing y Gestión Comercial",
        "titulo": "Manual mapas mentales",
        "autor": "S/A",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/17iL3StOr_K7aCG8e6qDgdQ8VlTEyO46f/view?usp=sharing"
    },
    {
        "autor": "José Antonio Madrigal",
        "carrera": "Ingeniería en Informática",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1w921GByNMFZmMpArtVeRlEC0-FoJVrMO/view?usp=sharing",
        "titulo": "Gánate  y ganarás en bolsa: El éxito radica en tu interior <span class=\"libro-edicion\">3 ed</span>"
    },
    {
        "carrera": "Ingeniería en Informática",
        "autor": "A. Markushevich",
        "titulo": "Teoría de las Funciones Analíticas - Tomo II",
        "link": "https://drive.google.com/file/d/1TuYNh2HTQNqwALa3gzszabij662QNyH6/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "titulo": "CODIGO ADUANERO",
        "autor": "EL CONGRESO DE LA NACION PARAGUAYA",
        "carrera": "Derecho",
        "link": "https://drive.google.com/file/d/1riY-leyzjjj3uzVUM7nsXd_Ca4fDfqRI/view?usp=sharing"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Medicina",
        "link": "https://drive.google.com/file/d/1-p8xUSHAAFkAhOgx1hP8uCX4Y2lH--dd/view",
        "titulo": "Anatomía Radiológica de Moller <span class=\"libro-edicion\">2DA EDICIÓN</span>",
        "autor": "Tostern B. Moller"
    },
    {
        "titulo": "Fármacos antifúngicos",
        "carrera": "Enfermería",
        "link": "https://drive.google.com/file/d/1PZlV4UeMKJOpUQK01rZZ_epFSfl6risZ/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "A. Mediavilla y J. Flórez"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "carrera": "Derecho",
        "titulo": "Como se hace un Alegato",
        "autor": "Enrique Falcón",
        "link": "https://drive.google.com/file/d/1bgPrIe4PnxDVsr0kmKFJ-bwZbD9_hsEl/view?usp=sharing"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=300&q=80",
        "carrera": "Medicina",
        "titulo": "Atlas del Cuerpo Humano",
        "autor": "Frederic Martini",
        "link": "https://drive.google.com/file/d/18H9yCvFkYwhwQeE22mdxukUJWehVmk5S/view"
    },
    {
        "link": "https://drive.google.com/file/d/1CTRjxpVFUS4rPkfJFj6AVyWi3l95wck8/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería en Informática",
        "autor": "Moisés Lazaro",
        "titulo": "Analisis Matemático I"
    },
    {
        "link": "https://drive.google.com/file/d/1PRBXc4LwTxudskt2r_izUPBXpjDf6TPp/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "J. A. Armijo",
        "carrera": "Enfermería",
        "titulo": "Factores patológicos que condicionan la respuesta a los fármacos"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1-15CBH7SaDIn-wBQdHZgLY4H6hv0NDQX/view?usp=sharing",
        "carrera": "Enfermería",
        "autor": "HOSPITAL UNIVERSITARIO REINA SOFÍA",
        "titulo": "Protocolo de Cuidados en Úlceras por presión"
    },
    {
        "autor": "J. A. Armijo y J. Benítez",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Enfermería",
        "link": "https://drive.google.com/file/d/1OPHVt8quIEwLS9o39VrQud1-iH_4q1Uy/view?usp=sharing",
        "titulo": "Factores fisiológicos que condicionan la respuesta a los fármacos"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1R8LWdGGaCp4MHNM7d37JjWzrivs8y5ud/view",
        "autor": "Material de Referencia",
        "carrera": "Medicina",
        "titulo": "Soporte Vital Cardiovascular Avanzado"
    },
    {
        "link": "https://drive.google.com/file/d/1erH5mFVp29wbYerIr3ivu4FltgNM5w6S/view?usp=sharing",
        "autor": "Alberto Romero",
        "titulo": "Globalización y pobreza",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "carrera": "Administración de Empresas"
    },
    {
        "link": "https://drive.google.com/file/d/1XJOvX2gtg6QZV9seRAnaj-eQoUPW1-mY/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "autor": "Jay Heizer, Barry Render",
        "carrera": "Administración de Empresas",
        "titulo": "Principios de ADMINISTRACIÓN DE OPERACIONES <span class=\"libro-edicion\">7 ed</span>"
    },
    {
        "autor": "Boaventura de Sousa Santos",
        "titulo": "Derecho y Emancipación",
        "carrera": "Derecho",
        "link": "https://drive.google.com/file/d/1JjxtBdf-26OcmH-rUNclupowltDtfmRv/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/17NXyWPMptm7DK-0bsExDq_4VyJABYJs2/view?usp=sharing",
        "titulo": "MBA en 10 días: Guía paso a paso con las enseñanzas de las mejores escuelas de negocios del mundo",
        "autor": "STEVEN SILBIGER",
        "carrera": "Comercio Internacional",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1N8dfKR8CMwDdGyO-mBaxTSmKql9sR-_h/view?usp=sharing",
        "carrera": "Marketing y Gestión Comercial",
        "titulo": "Introducción a la estadística empresarial",
        "autor": "ALEXANDER HOLMES, BARBARA ILLOWSKY, SUSAN DEAN"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1LjItkIdH6WFC2VwPgqf6f6ugoBVZrXyW/view?usp=sharing",
        "carrera": "Marketing y Gestión Comercial",
        "autor": "Dra. Marianela Denegri Coria",
        "titulo": "Psicología Económica"
    },
    {
        "titulo": "Fisiología",
        "link": "https://drive.google.com/file/d/1Em0QpoHXWgw-Iwyaz3UtUfFwPmFviT4I/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80",
        "autor": "Robin R. Preston, Thad E. Wilson",
        "carrera": "Nutrición"
    },
    {
        "carrera": "Comercio Internacional",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "titulo": "La nueva teoría del comercio internacional y la política comercial  estratégica",
        "autor": "Federico Steinberg<",
        "link": "https://drive.google.com/file/d/12ZCUlxKtg17-8bwEdUsDIVKpuXR1ewdO/view?usp=sharing"
    },
    {
        "link": "https://drive.google.com/file/d/1y8MaYDGNAg95ldEdiYzKz_KAb76GsUHD/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "carrera": "Derecho",
        "autor": "Clifford Geertz",
        "titulo": "LA INTERPRETACIÓN DE LAS CULTURAS"
    },
    {
        "carrera": "Marketing y Gestión Comercial",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "S/A",
        "titulo": "FINANZAS I: Finanzas Básicas",
        "link": "https://drive.google.com/file/d/10XNgUMcLyWrxShxZAMbb7CIpj-zA_7Ry/view?usp=sharing"
    },
    {
        "link": "https://drive.google.com/file/d/1P5agHB-El-Ikg626ClI6yqAsFtleM0rO/view?usp=sharing",
        "titulo": "HISTORIA DE LA TEORIA ECONOMICA Y DE SU METODO <span class=\"libro-edicion\">3 ed</span>",
        "autor": "Robert B. Ekelund, J.R. , Robert F. Hébert",
        "carrera": "Administración de Empresas",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=300&q=80",
        "carrera": "Medicina",
        "autor": "Keith L. Moore",
        "titulo": "Anatomía con Orientación Clínica <span class=\"libro-edicion\">6ª EDICIÓN</span>",
        "link": "https://drive.google.com/file/d/14L3rIQ1wDFfbYLZP5kc5b7QXFNnrlCP0/view"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/11vmw9uctfgZkXscwlou4LM5Imvs7Bkm0/view?usp=sharing",
        "titulo": "ASSESSMENT CENTER",
        "carrera": "Contaduría Pública",
        "autor": "Mariela Díaz Pinilla"
    },
    {
        "titulo": "Comportamiento del consumidor",
        "link": "https://drive.google.com/file/d/1niBe0Q-cr2n8eWxUVzQaGYFNkzW7aAaa/view?usp=sharing",
        "carrera": "Marketing y Gestión Comercial",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "Leon G. Schiffman, Leslie Lazar Kanuk y Joseph Wisenblit"
    },
    {
        "autor": "Kiseliov - Krasnov - Makarenko",
        "titulo": "Problemas de Ecuaciones Diferenciales Ordinarias",
        "carrera": "Ingeniería en Informática",
        "link": "https://drive.google.com/file/d/15EGXzN_hlp5S-6ziMpbIZx62S0vFEzk2/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/1jpz-7Yr6bEo-V9MBXqmAmaW-fg9PHVjl/view?usp=sharing",
        "titulo": "Representación de Figuras Espaciales",
        "autor": "N. M. Beskin",
        "carrera": "Ingeniería en Informática",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1JR3byLB09iFvqXg_7h3YMwwQrMpBQh2w/view?usp=sharing",
        "titulo": "Administración y dirección de la producción: Enfoque estratégico y de calidad <span class=\"libro-edicion\">2 ed</span>",
        "carrera": "Ingeniería en Informática",
        "autor": "Fernando D' Alessio Ipinza"
    },
    {
        "link": "https://drive.google.com/file/d/1alblohnVKJKbmlcbdPRjJpUZNByxSPUb/view?usp=sharing",
        "autor": "Mónica Balzarini",
        "imagen": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=300&q=80",
        "titulo": "Introducción a la bioestadística",
        "carrera": "Medicina"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1tLE2dmMq6oSOGu1y3VhU95FMvSniLSD8/view?usp=sharing",
        "carrera": "Marketing y Gestión Comercial",
        "titulo": "Contabilidad Administrativa",
        "autor": "David Noel Ramírez Padilla"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "Enrique Bonsón, Virginia Cortijo, Francisco Flores",
        "link": "https://drive.google.com/file/d/1qp71sdK80JdDuaPbqky-C5Y-i-b_TMeP/view?usp=sharing",
        "titulo": "ANÁLISIS DE ESTADOS  FINANCIEROS",
        "carrera": "Marketing y Gestión Comercial"
    },
    {
        "titulo": "Anatomía Humana Quiroz <span class=\"libro-edicion\">TOMO 1</span>",
        "autor": "Dr. Fernando Quiroz Gutiérrez",
        "link": "https://drive.google.com/file/d/1UFa0y0mSnePbHecRWZTqXPL-WyHU0R0i/view",
        "imagen": "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?auto=format&fit=crop&w=300&q=80",
        "carrera": "Medicina"
    },
    {
        "autor": "A. A. Borovkov",
        "carrera": "Ingeniería en Informática",
        "titulo": "Estadística Matemática",
        "link": "https://drive.google.com/file/d/1ba6OHqar04NHSh_c_G3XawdjKQt6RWZU/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1wy2aaf5dZu6x4wb1po3AwZSJhZKulkkj/view?usp=sharing",
        "carrera": "Ingeniería en Sistemas",
        "autor": "Ian Sommerville",
        "titulo": "Ingenieria de Software <span class=\"libro-edicion\">P2</span>"
    },
    {
        "link": "https://drive.google.com/file/d/1FmVmXNQkwVGyDCNAnWMPrrkTHzzPvFiG/view",
        "autor": "V. Ya. Lípchenko, R.P. Sámusev",
        "imagen": "https://images.unsplash.com/photo-1559757175-5700efe6732a?auto=format&fit=crop&w=300&q=80",
        "carrera": "Medicina",
        "titulo": "Atlas de Anatomía Normal Humana"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "titulo": "Contabilidad <span class=\"libro-edicion\">8 ed</span>",
        "autor": "Charles T. Horngren, Walter Harrison Jr., M. Suzanne Oliver",
        "carrera": "Administración de Empresas",
        "link": "https://drive.google.com/file/d/1Qu0b-a2g5rLivQSxqzSdS9uEaKTqz7wY/view?usp=sharing"
    },
    {
        "link": "https://drive.google.com/file/d/1ZDUiugmqfUOOzNXghXa-w78q1EWck4Nb/view",
        "titulo": "Principios de Anatomía, Fisiología e Higiene",
        "autor": "Gutiérrez Cirlos",
        "carrera": "Medicina",
        "imagen": "https://images.unsplash.com/photo-1559757175-5700efe6732a?auto=format&fit=crop&w=300&q=80"
    },
    {
        "titulo": "Administración de compras  y abastecimientos",
        "autor": "P. Fraser Johnson, Michiel R. Leenders, Anna E. Flynn",
        "link": "https://drive.google.com/file/d/16cRGvDR4ZOisBwsohA_u-jg9IkCklvpH/view?usp=sharing",
        "carrera": "Administración de Empresas",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "MARTHA ALICIA ALLES",
        "carrera": "Contaduría Pública",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1FJE14_hRCfZmcdgbhYg4H8JT1KkK7-rK/view?usp=sharing",
        "titulo": "Social media y Recursos Humanos"
    },
    {
        "link": "https://drive.google.com/file/d/1WE6xMItIYtI7RE90yuKCmvx7RsWoZegn/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "carrera": "Administración de Empresas",
        "autor": "Peter F. Drucker",
        "titulo": "La administración en una época de grandes cambios"
    },
    {
        "titulo": "Sé tu propio jefe en 12 meses: Guía para los negocios",
        "link": "https://drive.google.com/file/d/1jlsQmTAnu-LisXyLITBLLLU2UW5_qz6O/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "carrera": "Administración de Empresas",
        "autor": "Melinda F. Emerson"
    },
    {
        "autor": "Varios Autores",
        "titulo": "Manual Práctico de Nutrición en Pediatría",
        "link": "https://drive.google.com/file/d/1eX_gvFDdLCJkaAOUqVvDlpzgC6BTuzHS/view?usp=sharing",
        "carrera": "Nutrición",
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/17ZGiPn77YFw12rMQab-_-EMxz0Q1JNOP/view?usp=sharing",
        "autor": "Diego Monferrer Tirado",
        "titulo": "Fundamentos de marketing",
        "carrera": "Marketing y Gestión Comercial"
    },
    {
        "autor": "Enrique Falcón",
        "carrera": "Derecho",
        "titulo": "Como se hace una Demanda",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1thNl22eov2Dn4pr2xE2FBIr0Eiz8lZA_/view?usp=sharing"
    },
    {
        "autor": "JUAN CARLOS ALCAIDE CASADO",
        "carrera": "Marketing y Gestión Comercial",
        "titulo": "Marketing para las empresas de servicios profesionales",
        "link": "https://drive.google.com/file/d/1zpK6Nkb4csq_PNmlZl1sxABT05K7Bck5/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "carrera": "Administración de Empresas",
        "autor": "Liliana Alvarado de Marsano",
        "titulo": "BRAINKETING: EL MARKETING ES SENCILLO; CONQUISTAR EL CEREBRO DE LAS PERSONAS  ES LO DIFÍCIL",
        "link": "https://drive.google.com/file/d/1vpOirMcum7gnHrO2yvg8DlLTVt7-XqXf/view?usp=sharing"
    },
    {
        "autor": "Wynn Kapit, Lawrence M. Elson",
        "carrera": "Medicina",
        "titulo": "Anatomía Cromodinámica",
        "link": "https://drive.google.com/file/d/1PvIm3VshWNwGYdbjsKScX7yy3cJ5bqvL/view",
        "imagen": "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/1RwSbkvFavcS5iyjcImkJ1vGhoOA-5j61/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "titulo": "EL  FUTURO DE LA ADMINISTRACIÓN",
        "carrera": "Administración de Empresas",
        "autor": "GARY HAMEL y BILL BREEN"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1rD89o0YihuLstuMguiYyrjAUABFh09ZA/view?usp=sharing",
        "titulo": "Fármacos antiparasitarios II. Helmintos y artrópodos",
        "carrera": "Enfermería",
        "autor": "J. Flórez"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Contaduría Pública",
        "link": "https://drive.google.com/file/d/1E4uInsKa-qsQEHMCEsIgg8sbvqwkAR5u/view?usp=sharing",
        "autor": "S/A",
        "titulo": "Ciclo Contable y sus Procedimientos aplicados a la  empresa, Sociedad de Capital"
    },
    {
        "carrera": "Ingeniería en Informática",
        "link": "https://drive.google.com/file/d/1xpwssiZCoxE5-LV4tGSiJox17u5hWH3e/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "autor": "V.G. Shervátov",
        "titulo": "Funciones Hiperbólicas"
    },
    {
        "carrera": "Marketing y Gestión Comercial",
        "titulo": "METODOLOGÍA PARA EL DESARROLLO Y LANZAMIENTO  DE NUEVOS PRODUCTOS",
        "link": "https://drive.google.com/file/d/179cViEwpy2vFJgqr5RA2TqrSXH_zOka9/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "NATALIA LONDOÑO MONTOYA"
    },
    {
        "autor": "Peter F. Drucker",
        "titulo": "La gerencia de empresas",
        "link": "https://drive.google.com/file/d/18ktQuvu0g0tlpIJLS8xzqo-bTOKtnT9w/view?usp=sharing",
        "carrera": "Administración de Empresas",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1x4zJLL1XMjXzi5vWGC0hc3q_2HO0e7Zq/view?usp=sharing",
        "titulo": "FINANZAS CORPORATIVAS",
        "carrera": "Contaduría Pública",
        "autor": "JONATHAN BERK, PETER DEMARZO"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1jA0n6DkVVfq0yoZok-ceG8Anjuqat8-8/view?usp=sharing",
        "autor": "S/A",
        "carrera": "Marketing y Gestión Comercial",
        "titulo": "Guía de Marketing Digital"
    },
    {
        "carrera": "Marketing y Gestión Comercial",
        "titulo": "COMO CREAR MEGANICHOS DE ALTO RENDIMIENTO 1",
        "link": "https://drive.google.com/file/d/1ZGnYxGPHPQiZUJ1h_Su8wFJb0fTRFNrf/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "S/A"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería en Informática",
        "link": "https://drive.google.com/file/d/1nrpSyEfi745kH65_15NmtNOjoCd6DVui/view?usp=sharing",
        "autor": "Prof. Mario Azócar Azócar",
        "titulo": "Álgebra de Matrices"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1wTAY_iMpayhuVk5Cuhb2i_W2cZzP2nva/view?usp=sharing",
        "autor": "A. Pazos y J. Pascual",
        "titulo": "Farmacología de los movimientos anormales. Fármacos antiespásticos",
        "carrera": "Enfermería"
    },
    {
        "carrera": "Medicina",
        "autor": "Myra L. Samuels",
        "imagen": "https://images.unsplash.com/photo-1543286386-713bcd26a01b?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1G2xhb1tfTmfKohyzKJDVyR8oUvUTQ9uP/view?usp=sharing",
        "titulo": "Fundamentos de Estadística <span class=\"libro-edicion\">4.ª EDICIÓN</span>"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/17jEJRuO2lJ6TAovaJ8acydSKp9yjDpOh/view?usp=sharing",
        "carrera": "Nutrición",
        "autor": "David L. Nelson, Michael M. Cox",
        "titulo": "Lehninger Principios de Bioquímica <span class=\"libro-edicion\">7ed</span>"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/13Ef1t7dC7YKptZKNS2Z0KSV19cj3K_v0/view?usp=sharing",
        "titulo": "Técnica Dietoterapica <span class=\"libro-edicion\">3ed</span>",
        "carrera": "Nutrición",
        "autor": "Elisabet Navarro, Elsa Longo, Andrea González"
    },
    {
        "autor": "Federico Arnau Moya",
        "titulo": "Lecciones de Derecho Civil I",
        "link": "https://drive.google.com/file/d/1LBT7Cqf7tcwS8HnOi54YRMcOyKKI8sdC/view?usp=sharing",
        "carrera": "Derecho",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "carrera": "Administración de Empresas",
        "autor": "S/A",
        "titulo": "DERECHO PROCESAL CIVIL",
        "link": "https://drive.google.com/file/d/1CR6EtWHv7Y9EVtRN-EA4Tnb3Ji-0bTco/view?usp=sharing"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "carrera": "Administración de Empresas",
        "titulo": "Corea como una economía del conocimiento: Proceso evolutivo y enseñanzas",
        "autor": "Joonghae Suh,  Derek H. C. Chen",
        "link": "https://drive.google.com/file/d/1QSUVmBRqegIE3BSW_PCQycEsfmG6Po9w/view?usp=sharing"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "autor": "A. G. Kurosch",
        "link": "https://drive.google.com/file/d/1xb7eCdIa-j6lutL7xWAy2tVC4JfPA1Kb/view?usp=sharing",
        "titulo": "Curso de Álgebra Superior",
        "carrera": "Ingeniería en Informática"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1h3RbjREKHLNB31dgIQMLm5qossCYATAQ/view?usp=sharing",
        "titulo": "Biologia Molecular y Celular <span class=\"libro-edicion\">2 ed</span>",
        "autor": "Nalini Chandar, Susan Viselli",
        "carrera": "Enfermería"
    },
    {
        "titulo": "ANTROPOLOGÍA Y FEMINISMO <span class=\"libro-edicion\">5 ed</span>",
        "carrera": "Derecho",
        "link": "https://drive.google.com/file/d/155oSQ_T3qRxAUYydQHxg-RWfs17LjYHV/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "autor": "Henrietta L. Moore"
    },
    {
        "autor": "J. Tamargo y E. Delpón",
        "titulo": "Farmacología de la insuficiencia cardíaca I. : Glucósidos digitálicos y otros inotrópicos",
        "link": "https://drive.google.com/file/d/1Dnu8C8BsZCa7yqnJOXypP4xK4WzstZ3E/view?usp=sharing",
        "carrera": "Enfermería",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "Luis Rodríguez Domínguez, Isabel Gallego Álvarez, Isabel María García Sánchez",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería en Informática",
        "link": "https://drive.google.com/file/d/1JfLs8LtmKvfuIIzaqMZHrJ2oQWmWApa3/view?usp=sharing",
        "titulo": "CONTABILIDAD PARA NO ECONOMISTAS"
    },
    {
        "carrera": "Medicina",
        "titulo": "PROMETHEUS Atlas de Anatomía",
        "link": "https://drive.google.com/file/d/1z3ORBotSw_Uum7kdVFw1RMBE-4YHcGT8/view?usp=sharing",
        "autor": "Michael Schünke, Erik Schulte",
        "imagen": "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/1W1JmG9A2DNWvrnSmSPIB3I3q-jflySWK/view?usp=sharing",
        "titulo": "LA GOBERNANZA DE LAS MÚLTIPLES PARTES INTERESADAS: LA OFENSIVA CORPORATIVA HACIA UNA NUEVA FORMA DE GOBIERNO GLOBAL",
        "autor": "Harris Gleckman",
        "carrera": "Ciencias Políticas",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "titulo": "Estadística aplicada a las ciencias de la salud",
        "carrera": "Medicina",
        "link": "https://drive.google.com/file/d/1xbcbLVqwZmCkVH3q2EJLegVhXKj04mLY/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=300&q=80",
        "autor": "Joaquín Moncho Vasallo"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1DV4WY7CKXVelhVzafjEpmYQIXjyybIW1/view?usp=sharing",
        "carrera": "Ingeniería en Informática",
        "titulo": "Análisis Matemático III",
        "autor": "Moisés Lazaro"
    },
    {
        "titulo": "Jungla Empresarial",
        "carrera": "Comercio Internacional",
        "autor": "Sergio Álvarez Ducoing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1T2-uSe2OP_flevY9xsjFZcI6e7xzyAAe/view?usp=sharing"
    },
    {
        "carrera": "Ingeniería en Informática",
        "titulo": "Matemática Básica",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "autor": "Carlos Vera",
        "link": "https://drive.google.com/file/d/10sHEO2lc88asmN8TLF1-FVpcOX8g2xFh/view?usp=sharing"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "titulo": "LEY N° 2421/04 DE REORDENAMIENTO ADMINISTRATIVO Y DE ADECUACIÓN FISCAL",
        "autor": "CONGRESO DE LA NACIÓN PARAGUAYA",
        "carrera": "Derecho",
        "link": "https://drive.google.com/file/d/1H-Hx_N6YOvXEBCNWZepv0H6nOPtufrYS/view?usp=sharing"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1oyq7J-OH1JZe8UlBs8t5uojYUlewkd3f/view?usp=sharing",
        "autor": "Chan S. Park",
        "titulo": "Fundamentos de ingeniería económica",
        "carrera": "Contaduría Pública"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "carrera": "Administración de Empresas",
        "link": "https://drive.google.com/file/d/1dMPeO4j2dLxl7eFHgqahBoxlxW-ppUcJ/view?usp=sharing",
        "titulo": "Ingeniería Económica de DeGarmo",
        "autor": "William G. Sullivan, Elin M. Wicks, James T. Luxhoj"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ciencias Políticas",
        "titulo": "LA SEGUNDA GUERRA MUNDIAL: CAUSAS, DESARROLLO Y  REPERCUSIONES",
        "autor": "S/A",
        "link": "https://drive.google.com/file/d/1aVwSomwmn8wLk5xb6-Mxy-Z9wp0-tBCR/view?usp=sharing"
    },
    {
        "link": "https://drive.google.com/file/d/1jjGpr7vkAxL0ZFZ22mL3TcEMk1s_yp41/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería en Informática",
        "titulo": "Series de Fourirr",
        "autor": "Moises Lazaro"
    },
    {
        "autor": "A. Pazos",
        "titulo": "Mediadores celulares I. Histamina y 5-hidroxitriptamina. Farmacología de la migraña",
        "link": "https://drive.google.com/file/d/1IHOEp46VHABGFrupSozkO2bCflnPb7PE/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Enfermería"
    },
    {
        "link": "https://drive.google.com/file/d/1l9mZDY3mV4qkEYghVyHVFqNXb4LeCuQU/view",
        "autor": "Richard L. Drake",
        "imagen": "https://images.unsplash.com/photo-1583947215259-38e31be0b51f?auto=format&fit=crop&w=300&q=80",
        "titulo": "GRAY Anatomía Básica",
        "carrera": "Medicina"
    },
    {
        "autor": "S/A",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "titulo": "Administración Financiera: perlas para los directivos",
        "link": "https://drive.google.com/file/d/1BDU7mTCSISiu3UMrNiYaPB951gJ5j6wy/view?usp=sharing",
        "carrera": "Marketing y Gestión Comercial"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "carrera": "Administración de Empresas",
        "link": "https://drive.google.com/file/d/1Y6tkCBB5XAcLldlYXycHXDlqo7M1IiRM/view?usp=sharing",
        "titulo": "ECONOMÍA DE LA EDUCACIÓN",
        "autor": "Mónica Iris Calderón, Mariela Alejandra Ríos Rolla, María Fernanda Ceccarini"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "autor": "PELAYO ARIEL LABRADA",
        "carrera": "Derecho",
        "link": "https://drive.google.com/file/d/1110IqY6HNR1PG99GGI1QsIURH58TRhHJ/view?usp=sharing",
        "titulo": "Terminología Forense"
    },
    {
        "origenId": "01MXVTLII3NIRHJBYHJ5DYLOB3WYU7GM4Y",
        "materia": "17. Fisicoquímica",
        "carrera": "Bioquímica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Fisica Quimica II Nodos",
        "estadoPortada": "pendiente",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAbaiJ0hwdPR4W4O7Yp8zOYAasGXDhnY7bFL43w3pexAG4",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "autor": "Autor Institucional",
        "nombreArchivo": "Fisica Quimica II Nodos.pdf"
    },
    {
        "nombreArchivo": "Lehninger Principios de Bioquimica 7a Edicion.pdf",
        "titulo": "Principios de Bioquimica <span class=\"libro-edicion\">7° Edición</span>",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAbmEzbqpw7SKTW-E5A4ys0AYv0_ThRO1sq1M7HHOLqHSk",
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "autor": "Lehninger",
        "origenId": "01MXVTLII3TBGNXKU4HNEKJVXYJZAOGKZU",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "materia": "18. Bioquímica"
    },
    {
        "carrera": "Bioquímica",
        "titulo": "Texto Atlas de Histologia",
        "nombreArchivo": "Texto Atlas de Histologia-Gartner.pdf",
        "origenImportacion": "Bioquimica OneDrive",
        "estadoPortada": "pendiente",
        "materia": "9. Histología Humana",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAbzgwxp2SjRoKCLKdpHJgJAQxhssDgozdtccRo1nTi0lM",
        "autor": "LESLlE P. GARTNER y JAMES L. HIATT",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenId": "01MXVTLII3ZYGDDJ3EUNDIFARMU5URZGAJ",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        }
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenId": "01MXVTLII4K2UXYDM4XZAZMNYCY2QGGXSK",
        "titulo": "Bacteriologia y Virologia Medica <span class=\"libro-edicion\">2° ed</span>",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAcVql8DZy-QZY3AsagY15KAWptfCBQ2nv9RFVRWm6D4_4",
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "32. Parasitología",
        "carrera": "Bioquímica",
        "nombreArchivo": "Bacteriologia-y-Virologia-Medica.pdf",
        "autor": "S/A",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        }
    },
    {
        "origenId": "01MXVTLII4SJW2SZNPEBF2R4NDPPYC7MKO",
        "materia": "12. Geometría Analítica y Cálculo",
        "estadoPortada": "pendiente",
        "carrera": "Bioquímica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenImportacion": "Bioquimica OneDrive",
        "nombreArchivo": "calculo-volumen-1-de-tom-apostol.pdf",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAckm2pZa8gS6jxo3vwL7FOAb4XtiVnV1w_AHHE4o0FIXo",
        "titulo": "Calculo volumen 1 <span class=\"libro-edicion\">2° Edición</span>",
        "autor": "tom apostol"
    },
    {
        "origenId": "01MXVTLII5HRYFMH4UBNCK6BLZXE5BBABP",
        "estadoPortada": "pendiente",
        "materia": "34. Fisica",
        "carrera": "Bioquímica",
        "nombreArchivo": "Teoria de la Relatividad General. Bert,Janssen.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenImportacion": "Bioquimica OneDrive",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAdPHBWH5QLRK8Febk6EIAvARBcH53Uhtqacx6AVuRroiY",
        "titulo": "Teoría de la Relatividad General",
        "autor": "Bert Janssen"
    },
    {
        "origenId": "01MXVTLII5RAYAINKE55DZYLUNQ6Z5G2MY",
        "materia": "7. Comunicación Oral y Escrita en Castellano",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "origenImportacion": "Bioquimica OneDrive",
        "estadoPortada": "pendiente",
        "titulo": "Manual de la Nueva Gramática de la Lengua Española",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAdiDAENUTvR5wujYez02mYARvaPd3apllUj_NwNQV9Mdc",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "autor": "RAE",
        "nombreArchivo": "RAE Manual de la Nueva Gramatica de la Lengua Espanola.pdf"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAdqvuX2tO2SYsEsTtx5QxVAW-Dvpj1koKFMCewauPnJFU",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Ricardo Vega A.",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "4. Química General",
        "estadoPortada": "pendiente",
        "origenId": "01MXVTLII5VL5ZPWWTWZEYWBFRHNY6KDCV",
        "nombreArchivo": "Sistemas Dispersos - Soluciones.pdf",
        "titulo": "Sistemas Dispersos Soluciones: Teoría y Práctica",
        "carrera": "Bioquímica"
    },
    {
        "estadoPortada": "pendiente",
        "autor": "López - Martínez - Sánchez",
        "carrera": "Bioquímica",
        "materia": "22. Microbiología General",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAeGjqDBITTSZERhcCznXuFAal4LUYjNF7eRAzCyCsle4c",
        "origenImportacion": "Bioquimica OneDrive",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "nombreArchivo": "Microbiologia y Parasitologia Medicas de Tay.pdf",
        "titulo": "Microbiologia y Parasitologia Medicas de Tay <span class=\"libro-edicion\">5° Edición</span>",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenId": "01MXVTLII6DI5IGBEE2NEZCEMFYCZZ264F"
    },
    {
        "titulo": "QUÍMICA ORGÁNICA: modelo de las moléculas del ciclopentano",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAeqYq1j_PuTr1w_1hEaKAJAQ3W8ctfBh8p69PItjIC0HQ",
        "autor": "Luz Sánchez G.",
        "carrera": "Bioquímica",
        "fechaImportacion": {
            "seconds": 1792413003,
            "nanoseconds": 226000000
        },
        "nombreArchivo": "QUÍMICA ORGÁNICA modelo de las moléculas del ciclopentano.pdf",
        "estadoPortada": "pendiente",
        "origenId": "01MXVTLII6VGFLLD7T5ZHL24H7LBCGRIAJ",
        "materia": "39. Quimica Organica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "titulo": "Introduccion a la bioestadistica",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAAICNgu0TUR56NhNvyydKVAUiIU7N0FIeH1SFcE3C8WBU",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "Introduccion_a_la_bioestadistica.pdf",
        "origenId": "01MXVTLIIAEARWBO2E2RDZ5DME3PZMTUUV",
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "Ricardo Navarro Fierro",
        "materia": "5. Bioestadística"
    },
    {
        "titulo": "Anatomía Humana -  I <span class=\"libro-edicion\">11  Edición</span>",
        "origenId": "01MXVTLIIANZCKQVSQR5EYDXJIWY6UB3DV",
        "carrera": "Bioquímica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAAbkSoVlCPSYHdKLY9QOx1Abp_-f-IpumR9BO8IHGSkmc",
        "estadoPortada": "pendiente",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "Anatomía Humana - Rouviere I 11  Edición.pdf",
        "autor": "Rouviere",
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "1. Anatomia Humana"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "materia": "10. Ética y Bioética",
        "origenId": "01MXVTLIIAX67AOC46VJFYIGCBL36KGBQM",
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "José Antonio Morales González, Graciela Nava Chapa, Jaime Esquivel Soto y Luis Enrique Díaz Pérez",
        "carrera": "Bioquímica",
        "nombreArchivo": "Principios de Ética Y Bioética.pdf",
        "titulo": "Principios de Ética Y Bioética",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAAv74HC56qS4QYQV78owYMAXe3I4Pq0snCH2iZcHsDVMg",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "estadoPortada": "pendiente"
    },
    {
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "Francisco Javier Pérez González",
        "titulo": "CÁLCULO DIFERENCIAL E INTEGRAL DE FUNCIONES DE UNA VARIABLE",
        "nombreArchivo": "calculo_diferencial_integral_func_una_var. Francisco Pérez.pdf",
        "origenId": "01MXVTLIIBPT76C7AU2VBIJDEG2NIRELEP",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQABfP_hfBTVQoSMhtNREiyPAawLNjCXhqyeo_IzcAUNlQo",
        "materia": "6. Cálcula Diferencial e Integral"
    },
    {
        "estadoPortada": "pendiente",
        "carrera": "Bioquímica",
        "origenId": "01MXVTLIICF7C424DYJNA3C37EGCVNM6ZB",
        "titulo": "Química III",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "4. Química General",
        "nombreArchivo": "Química 3°.pdf",
        "autor": "Departamento Académico de la Editorial Ingenio",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQACL8XNcHhLQbFv5DCq1nshAbHRN_riB_2X1UU5KuqaVHw"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "nombreArchivo": "Microbiologia y Parasitologia Humana 4a Edicion Romero Cabello.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente",
        "titulo": "Microbiologia y Parasitologia Humana <span class=\"libro-edicion\">4° Edición</span>",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQADMArek1SBT7bwIsLd3eOMATh_HrvqKe5Gwc-KDILaQlY",
        "materia": "22. Microbiología General",
        "origenId": "01MXVTLIIDGAFN5E2UQFH3N4BCYLO53Y4M",
        "carrera": "Bioquímica",
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "Romero Cabello"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenId": "01MXVTLIIDTZYYTG6YA5DJRVD7DKSZAFUE",
        "nombreArchivo": "La practica profesional, retos y desafios para el apoyo organizacional.pdf",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "estadoPortada": "pendiente",
        "autor": "Camilo José Peña  Lapeira - Liliana Vargas Puente",
        "materia": "29. Pasantía Supervisada",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQADnnGJm9gHRpjUfxqlkBaEAe6dn8ztKAMNQ-1QwUzjyck",
        "titulo": "La practica profesional, retos y desafios para el apoyo organizacional",
        "carrera": "Bioquímica",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "materia": "36. Quimica Analítica",
        "origenId": "01MXVTLIIE22Q4AK37DBFIJSOZ4HXMN7WZ",
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "Gastón Charlot",
        "carrera": "Bioquímica",
        "nombreArchivo": "Quimica Analitica T 2.PDF",
        "titulo": "Química Analítica <span class=\"libro-edicion\">Tomo II</span>",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAE1qHAK38YSoTJ2eHuxv7ZAX96cJvA92pYHaYGdEBM4I8",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "estadoPortada": "pendiente"
    },
    {
        "materia": "28. Clínica",
        "autor": "Leon Chaitow y Judith Walker DeLany",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAE0h9QCVzPQY7uQhvF2MGkAXZQZvLYhlChkoeeA5vVl2s",
        "carrera": "Bioquímica",
        "origenId": "01MXVTLIIE2IPVACK4Z5AY53SCDPC5RQNE",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "nombreArchivo": "Aplicacion clinica de las tecnicas neuromusculares Tomo I.pdf",
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Aplicacion clinica de las tecnicas neuromusculares <span class=\"libro-edicion\">TOMO 1</span>"
    },
    {
        "origenImportacion": "Bioquimica OneDrive",
        "nombreArchivo": "Netter Atlas de Anatomia Humana 8a Edicion.pdf",
        "carrera": "Bioquímica",
        "titulo": "Atlas de Anatomia Humana <span class=\"libro-edicion\">8° Edición</span>",
        "origenId": "01MXVTLIIEI657OJVFTNE3S74TD2ALCPEZ",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAER7v3JqWbSbl_kx6AsTyZAWOXGnMjZNSnPQYXp9M8kBA",
        "estadoPortada": "pendiente",
        "materia": "1. Anatomia Humana",
        "autor": "Netter",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenId": "01MXVTLIIEU27SQRDXYBBJ4WGIW7NI35IY",
        "nombreArchivo": "Problemas de Química General - José Ibarz_reduce.pdf",
        "autor": "José Ibarz",
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "4. Química General",
        "titulo": "Problemas de Química General <span class=\"libro-edicion\">2° Edición</span>",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAEpr8oRHfAQp5YyLfajfUYAbvQvdXHUnc2fruc6fsnWEM",
        "carrera": "Bioquímica",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        }
    },
    {
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "Rolando Polo Collantes",
        "titulo": "Estequiometría",
        "origenId": "01MXVTLIIFB5QBCDWN7RGZT3DVH6VW3H7J",
        "nombreArchivo": "Estequiometría.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "materia": "4. Química General",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAFD2ARDs38TZnsdT-rbZ_pAWOkNbQMIlVB9VGRWoZ1cok",
        "estadoPortada": "pendiente"
    },
    {
        "nombreArchivo": "Manual de urgencias.pdf",
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "titulo": "Manual de urgencias",
        "materia": "28. Clínica",
        "autor": "Carlos Bibiano Guillén",
        "carrera": "Bioquímica",
        "origenId": "01MXVTLIIG3BPCZMAEWBBZB5YIPBVXES2N",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAG2F4ssASwQ5D3CHhrcktNAaxgkW2IP_nuNZ5DVzW7BIs",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        }
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAGwKUBYDy4QKtu00kv_QqpAR39JYVDkMvyO_h7I4wkDiA",
        "autor": "Lucía Rivas",
        "estadoPortada": "pendiente",
        "nombreArchivo": "Biologia 2- Lucía Rivas.pdf",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "titulo": "Biologia 2",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "materia": "2. Biología General",
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLIIGYCSQCYB4XBAKW3WTJEX72CVJ"
    },
    {
        "estadoPortada": "pendiente",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAHjexDzgjmQZwir3djyJMbAUX5_cIZHPyAC6QVLGGo84k",
        "origenId": "01MXVTLIIHRXWEHTQI4ZAZYIVPO5R4REY3",
        "nombreArchivo": "Epidemiologia.y.Bioestadistica.Secretos_booksmedicos.sorg.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Robert Nordness",
        "materia": "5. Bioestadística",
        "titulo": "Epidemiologia.y.Bioestadistica: Secretos",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAIy-zfYkhfTpQmocad2R9GAX3LgQCfkJeJqtpJX9X6mUY",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "autor": "De la Rosa et al",
        "carrera": "Bioquímica",
        "origenId": "01MXVTLIIIZPWN6YSIL5HJIJVBY2O5SH2G",
        "materia": "22. Microbiología General",
        "titulo": "Microbiologia en Ciencias de la Salud <span class=\"libro-edicion\">3° Edición</span>",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "Microbiologia en Ciencias de la Salud.pdf",
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "carrera": "Bioquímica",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "titulo": "Química General",
        "estadoPortada": "pendiente",
        "nombreArchivo": "Química General - Juan Goñi Galarza.pdf",
        "materia": "4. Química General",
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "Ing. Juan Goñi Galarza",
        "origenId": "01MXVTLIIJHH3RWTV64NCZULAF64C4WXWV",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAJOfcbTr7jRZosBfcFy17VASP4aXgUTUAqNOz-WF8lXwc"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAJkGs-c5Q3SJDTKiU-M5CrAWSWLqt1E33McOfV394M6uw",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Dra. María Susana González Velázquez y  Dra. Silvia Crespo Knopfler",
        "estadoPortada": "pendiente",
        "materia": "30. Salud Pública y Epidemiología",
        "titulo": "Salud Publica y Enfermeria Comunitaria",
        "origenId": "01MXVTLIIJSBVT444UG5EJBUZKEU7DHEFL",
        "carrera": "Bioquímica",
        "origenImportacion": "Bioquimica OneDrive",
        "nombreArchivo": "Salud Publica y Enfermeria Comunitaria.pdf"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "nomenclatura-de-quimica-inorganica-recomendaciones-de-2005-varios-autores.pdf",
        "autor": "Neil G. Connelly, Richard M. Hartshorn, Ture Damgus y Alan T. Hutton",
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "37. Quimica Inorganica",
        "origenId": "01MXVTLIIK2EDALE7QXBBYJW7YOS2IXW3J",
        "titulo": "Nomenclatura de Química Inorgánica",
        "carrera": "Bioquímica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAK0QYFk_C4Q4Tb-HS0i9tpAbJC33ifHhAkQErVCG8pig0"
    },
    {
        "nombreArchivo": "Lippincott Histologia de Bolsillo.pdf",
        "titulo": "Lippincott: Histologia de Bolsillo",
        "autor": "Lisa M. J. Lee,",
        "origenId": "01MXVTLIIKLDEKFEI4RFG3MLBRLE7R76VN",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "origenImportacion": "Bioquimica OneDrive",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAKWMiikRyJTbYsMVk_H_qtAfOghgfGZQMmp2X2jyOQnUQ",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "materia": "9. Histología Humana"
    },
    {
        "titulo": "Medio Biología <span class=\"libro-edicion\">4° 2010</span>",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "nombreArchivo": "4-Medio-Biología-Luis Flores.pdf",
        "origenId": "01MXVTLIIKMPLDV5LROBAK54YXRQZOGEN3",
        "estadoPortada": "pendiente",
        "carrera": "Bioquímica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAKY9Y69XFwQK7zF4wy4xG7AWJBshEPYTC4zH0cqnW6U0Q",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Luis Flores",
        "materia": "2. Biología General",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "materia": "2. Biología General",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAL9KM-qY6kSpEDeSauk6ftAaOqIBCGftFJslfhPE-sx1I",
        "estadoPortada": "pendiente",
        "autor": "S/A",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "Biología 2 -Origen,evolucíon y continuidad de los sistemas biológicos.pdf",
        "carrera": "Bioquímica",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "origenId": "01MXVTLIIL6SRT5KMOURFJCA3ZE2XJHJ7N",
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Biología 2 : Origen,evolucíon y continuidad de los sistemas biológicos"
    },
    {
        "nombreArchivo": "Serie RT Bioquimica, biologia molecular y genetica.pdf",
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Bioquímica,  biología molecular y genética <span class=\"libro-edicion\">6ed</span>",
        "estadoPortada": "pendiente",
        "autor": "Michael A. Lieberman y Rick Ricer",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQALW75jjaQeS42kCTqe6UYOAbGYM4leW22X35dMwVx4vPI",
        "origenId": "01MXVTLIILLO7GHDNEDZFY3JAJHKPOSRQO",
        "materia": "18. Bioquímica",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        }
    },
    {
        "titulo": "BIOQUIMICA <span class=\"libro-edicion\">29° Edición</span>",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "origenId": "01MXVTLIINE5MP5QKPOBBJTSDU7LCO6EJR",
        "carrera": "Bioquímica",
        "origenImportacion": "Bioquimica OneDrive",
        "nombreArchivo": "BIOQUIMICA HARPER.pdf",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "HARPER",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQANJ1j-wU9wQpnIdPrE7xExAUaYVLJvVDWjgd63DyTKFCo",
        "materia": "18. Bioquímica"
    },
    {
        "origenId": "01MXVTLIIOHX353BXMH5FZWXTP7K3FA4IY",
        "materia": "30. Salud Pública y Epidemiología",
        "nombreArchivo": "Salud Publica. Teoria y Aplicaciones.pdf",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAOPffdhuw_S5teb_q2UHEYARJGW40cAAtpT_jWuEwQcEU",
        "estadoPortada": "pendiente",
        "carrera": "Bioquímica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "titulo": "Salud Publica. Teoria y Aplicaciones",
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "Marcela Arrivillaga Quintero"
    },
    {
        "autor": "Balbiano, Barderi, Iudica, Molinari Leto, Otero",
        "carrera": "Bioquímica",
        "materia": "2. Biología General",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAQWeU3hj31T7NJsJVsn0A8Ab3pypASc2o2ArdvDWYcE40",
        "titulo": "Biologia: Intercambio de materia y energía en el ser humano, en las células y en los ecosistemas",
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLIIQLHSTPBR56VH3GSNQSVWJ6QB4",
        "nombreArchivo": "Biologia-Intercambio de materia y energía en el ser humano, en las células y en los ecosistemas.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        }
    },
    {
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "titulo": "Consulta Practica Parasitologia Medica <span class=\"libro-edicion\">1° Edición</span>",
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLIIRNOM7BKTHMRFZKBB333P6KRME",
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente",
        "autor": "José H. Pabón",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQARa5nwqmdkS5UEO97f5UWEAYX_xNVSD0YJdQ_T990JUzs",
        "nombreArchivo": "Consulta Practica Parasitologia Medica.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "materia": "32. Parasitología"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "titulo": "Embriologia Humana y Biologia del Desarrollo <span class=\"libro-edicion\">3° Edicion</span>",
        "nombreArchivo": "Embriologia Humana y Biologia del Desarrollo 3a Edicion.pdf",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQARtTw9QdhjTq6Wt1EAl9axAYvOIENrAe7Vm_VJoc5oWpw",
        "materia": "9. Histología Humana",
        "carrera": "Bioquímica",
        "origenId": "01MXVTLIIRWU6D2QOYMNHK5FVXKEAJPVVR",
        "estadoPortada": "pendiente",
        "autor": "Arteaga Martinez y García Peláez",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "estadoPortada": "pendiente",
        "materia": "8. Fisiología Humana",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "carrera": "Bioquímica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQASF3ZjT_BWSKt7Zq1s0uQjAcFZa4cqkBthOiQxNS-AU4o",
        "nombreArchivo": "Anatomia y fisiología I. Generalidades de anatomía y fisiología.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenId": "01MXVTLIISC53GGT7QKZEKW63GVVWNFZBD",
        "autor": "S/A",
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Anatomia y fisiología I: Generalidades de anatomía y fisiología <span class=\"libro-edicion\">2° Semestre</span>"
    },
    {
        "origenImportacion": "Bioquimica OneDrive",
        "estadoPortada": "pendiente",
        "carrera": "Bioquímica",
        "titulo": "Historia General de las Drogas",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQASsiaBtjLHTphkbg_3YdkpAYYmpRwkpibZv4tjz-EGHVA",
        "nombreArchivo": "Historia General de las Drogas.pdf",
        "materia": "19. Toxicología",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "autor": "Antonio Escohotado",
        "origenId": "01MXVTLIISWITIDNRSY5HJQZDOB73WDWJJ",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "nombreArchivo": "Folleto cepre uni Quimica 1.pdf",
        "estadoPortada": "pendiente",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQATE3eBfnm6TZe3p1xWMc3aASBM5ULtxzi1BhV7llPJ1lM",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Prog Joel K.Rojas Mendoza",
        "materia": "4. Química General",
        "titulo": "Quimica 1",
        "origenId": "01MXVTLIITCN3YC7TZXJGZPN5HLRLDDTO2",
        "carrera": "Bioquímica",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "origenId": "01MXVTLIIUNBRFWDUZVRC35FHKJ63RQZFL",
        "origenImportacion": "Bioquimica OneDrive",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAUaGJbDpmsRb6U6k-3GGSrARWA7ikXf1YI3CVyQdnCpVI",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "CATHERINE E. HOUSECROFT y ALAN G. SflARPE",
        "estadoPortada": "pendiente",
        "materia": "37. Quimica Inorganica",
        "titulo": "QUÍMICA INORGÁNICA <span class=\"libro-edicion\">2ed</span>",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "carrera": "Bioquímica",
        "nombreArchivo": "QUÍMICA INORGÁNICA 2° ED QUÍMICA CATHERINE & HOUSECROFT.pdf"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAUkdUhTaXdQZfl_d99cW_EAVFooEkNjBdxhyw8XzMTVRQ",
        "origenImportacion": "Bioquimica OneDrive",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Fabio Hernández Día",
        "materia": "3. Metodología de Estudio",
        "nombreArchivo": "Metodologia del estudio como estudiar con rapidez y eficacia.pdf",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "titulo": "Metodologia del estudio como estudiar con rapidez y eficacia",
        "origenId": "01MXVTLIIUSHKSCTNF3VAZPZP5356XC36E",
        "estadoPortada": "pendiente",
        "carrera": "Bioquímica"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "autor": "Mónica Balzarini et al",
        "titulo": "Introduccion a la bioestadistica: aplicaciones con infostat",
        "origenImportacion": "Bioquimica OneDrive",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "nombreArchivo": "Introduccion a la bioestadistica aplicaciones con infostat.pdf",
        "materia": "5. Bioestadística",
        "estadoPortada": "pendiente",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAV7MCpJXkhQqQZ1yhDcuYqARo_eOmlZLBlvN6Gg85omIc",
        "origenId": "01MXVTLIIV5TAKSJLZEFBKIGOXFBBXFZRK"
    },
    {
        "origenImportacion": "Bioquimica OneDrive",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAVQpkDbbAqSo-SGJUemdoYAXmNB8MfleNfc20F_nbL24U",
        "titulo": "Fisica Universitaria <span class=\"libro-edicion\">Volumen 2</span>",
        "nombreArchivo": "Fisica Universitaria. V.2 Samuel J. Ling, Jeff Sanny William Moebs.pdf",
        "estadoPortada": "pendiente",
        "origenId": "01MXVTLIIVIKMQG3NQFJFI7EQYSUPJTWQY",
        "carrera": "Bioquímica",
        "autor": "Samuel J. Ling, Jeff Sanny William Moebs",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "materia": "34. Fisica",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        }
    },
    {
        "nombreArchivo": "Química-Unidades químicas de masa.pdf",
        "titulo": "Química: Teoría y Problemas",
        "autor": "Juan Acosta Ibañez",
        "estadoPortada": "pendiente",
        "origenId": "01MXVTLIIVLQWDX5AQGNHYCLIYQLVBURZ3",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAVXCw79BAzT4EtGILqGkc7AQ1p8zPdsds_Qym-eAcSvuY",
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "4. Química General",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        }
    },
    {
        "autor": "Dr. Jesús Luis Gómez Perales",
        "carrera": "Bioquímica",
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "31. Metodología de Radiosótopos",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAVyhnxo4ZiRrykYMfvDqDJARzvQAv6R8Jrp9NOxAdMPGg",
        "titulo": "RADIOFARMACIA",
        "estadoPortada": "pendiente",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenId": "01MXVTLIIVZIM7DI4GMJDLZJDAY7XQ5IGJ",
        "nombreArchivo": "RADIOFARMACIA.pdf"
    },
    {
        "origenId": "01MXVTLIIW67FL5I6PYVA26BQFMJKUPPZ7",
        "origenImportacion": "Bioquimica OneDrive",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAW98q-o8_FQa8GBWJVR78_AXGEBB5YOLygRTS16XdnMLo",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Harper",
        "materia": "18. Bioquímica",
        "estadoPortada": "pendiente",
        "titulo": "Bioquimica Ilustrada 31a Edicion <span class=\"libro-edicion\">31° Edición</span>",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "carrera": "Bioquímica",
        "nombreArchivo": "Harper Bioquimica Ilustrada 31a Edicion.pdf"
    },
    {
        "nombreArchivo": "Química Teoría y Práctica Walter Cartolín Rodríguez.pdf",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "origenId": "01MXVTLIIWCFDNMDX6ZBFK4ZRYHQ56RPGL",
        "autor": "Walter Cartolín Rodríguez",
        "titulo": "Química: Teoría y Práctica",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "materia": "4. Química General",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAWEUbWDv7ISq5mODw76LzLAbXhHONSdssEiuq3JUQgsEA",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "autor": "Ordóñez Smith",
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "materia": "32. Parasitología",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAWInqx1cOeQKfk1_WHRVsMAcIOpR3DIzHSHJkhimK5qTg",
        "titulo": "Guías Prácticas. Laboratorios de Bacteriología Clínica",
        "estadoPortada": "pendiente",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "origenId": "01MXVTLIIWEJ5LDVODTZAKPZGX6WDUKWYM",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "Guías Prácticas. Laboratorios de Bacteriología Clínica.pdf"
    },
    {
        "carrera": "Bioquímica",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "estadoPortada": "pendiente",
        "titulo": "Anatomía Humana - II <span class=\"libro-edicion\">11  Edición</span>",
        "nombreArchivo": "Anatomía Humana - Rouviere II 11  Edición.pdf",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAXNEY_bZDrTpLFkqTmTjCwAb8waL07wDvpAcxfetwHFlQ",
        "origenId": "01MXVTLIIXGRDD63MQ5NHJFRMSUTTE4MFQ",
        "materia": "1. Anatomia Humana",
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "Rouviere",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "materia": "25. Inmunología",
        "origenId": "01MXVTLIIXIYA6L7AJCNHYGHC5VT6XHWUK",
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "Anaya et al",
        "carrera": "Bioquímica",
        "nombreArchivo": "Autoinmunidad y Enfermedad Autoinmune.pdf",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAXRgHl_AkTT4McXaz9c9qKAVDSs-s7bQE_U--mlZcIqWw",
        "titulo": "Autoinmunidad y Enfermedad Autoinmune",
        "estadoPortada": "pendiente"
    },
    {
        "materia": "8. Fisiología Humana",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "GANONG",
        "carrera": "Bioquímica",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "origenImportacion": "Bioquimica OneDrive",
        "estadoPortada": "pendiente",
        "titulo": "FISIOLOGIA MEDICA 25 ED <span class=\"libro-edicion\">25° Edicion</span>",
        "origenId": "01MXVTLIIXWQUT7RRSBREL7QZZHDLBWDKJ",
        "nombreArchivo": "GANONG FISIOLOGIA MEDICA 25 ED.pdf",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAXtCk_xjIMSL_DOTjWGw1JAX3gP3Q4xcNkK8NO0rEODjc"
    },
    {
        "carrera": "Bioquímica",
        "titulo": "Bethesda Manual de Hematologia Clinica 4a Edicion <span class=\"libro-edicion\">4° Ed</span>",
        "estadoPortada": "pendiente",
        "nombreArchivo": "Bethesda Manual de Hematologia Clinica 4a Edicion.pdf",
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "27. Hematología",
        "origenId": "01MXVTLIIYNOGMOYILGVFJKZODE37H2ANT",
        "autor": "Griffin P. Rodgers Neal S. Young",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAYa4zHYQs1SpVlwyb-fQGzAXT9Lganjh1TEGljcdonCtA",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        }
    },
    {
        "titulo": "Metodología de la Investigación <span class=\"libro-edicion\">1° Semestre</span>",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "origenId": "01MXVTLIIYODKQ4C5DWFG2XDL27L6QMI4T",
        "nombreArchivo": "Metodología de la Investigación.pdf",
        "estadoPortada": "pendiente",
        "carrera": "Bioquímica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAYcNUOC6OxTauNevr9BiOTAbSUTUviveIABfxb_EpQ8wo",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "Mauricio Reyes Corona",
        "materia": "26. Metodología de la Investigación"
    },
    {
        "estadoPortada": "pendiente",
        "origenId": "01MXVTLIIZITXSNGUQ2VCKI6FYH6CUVNCW",
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Medicina Clinica: Fisiopatología y semiología",
        "nombreArchivo": "medciina clinica javier laso.pdf",
        "autor": "Javier Laso",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAZRO8mmpDVRKR4uD-FSrRWAQjh4pgcFtBzCrB638UWFLI",
        "carrera": "Bioquímica",
        "materia": "28. Clínica"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "Gartner - Hiatt",
        "materia": "9. Histología Humana",
        "origenId": "01MXVTLIIZKPIVQJ2MRJEL5ADV5KJTO5HN",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "estadoPortada": "pendiente",
        "nombreArchivo": "Atlas Color de Histología 4°ed.pdf",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAZU9FYJ0yKSL6AdeqTN3TtAfodAW9Adm8YqyjGpMS0ctw",
        "titulo": "Atlas Color de Histología <span class=\"libro-edicion\">4°ed</span>",
        "carrera": "Bioquímica"
    },
    {
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "6. Cálcula Diferencial e Integral",
        "origenId": "01MXVTLIJ3FWSWKICEYNEKPM6OY7623P6M",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Arturo Ylé",
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente",
        "nombreArchivo": "calculo I. Cálculo diferencial para bachillerato. Arturo Ylé.pdf",
        "titulo": "calculo I:  Cálculo diferencial para bachillerato.",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQA7LaVlIETDSKezzsf9rb_MAdxPpsXEdnUp9bgYEiX7XhU"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "nombreArchivo": "Folleto cepre uni Quimica 4.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Prof. Joel K. Rojas Mendoza",
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "4. Química General",
        "origenId": "01MXVTLIJ4QSGJBP5KWBHI3LCXJZPYJCFJ",
        "titulo": "Quimica 4",
        "carrera": "Bioquímica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQA8hIyQv6qwTo2sV05fhIipAY4QCuZUNubkVaaBCNPsME4"
    },
    {
        "origenId": "01MXVTLIJ5O3O6MWC6UNAL6O377X2P3GOW",
        "materia": "2. Biología General",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQA9dt3mWF6jQL87f_30_ZnWAUNADCEQZECdO637fIjM7mU",
        "nombreArchivo": "Biologia Molecular. ADN recombinante y sus aplicaciones.pdf",
        "estadoPortada": "pendiente",
        "carrera": "Bioquímica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "titulo": "Biologia Molecular: ADN recombinante y sus aplicaciones",
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "Pinilla Bermúdez"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenId": "01MXVTLIJ6FMRZ2Z2EPJFZ2GBMKK2ZFGJM",
        "estadoPortada": "pendiente",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "nombreArchivo": "Bioquimica Voet 3ed.pdf",
        "autor": "Voet Voet",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQA-KyOdZ0R6S50YLFK1kpksAREw0e_w-LvUKSA89lYBnAI",
        "materia": "18. Bioquímica",
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Bioquimica <span class=\"libro-edicion\">3° Edición</span>",
        "carrera": "Bioquímica"
    },
    {
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "Kuby. Inmunología 7ª Edición. LEONES POR LA SALUD.pdf",
        "titulo": "Kuby Inmunología <span class=\"libro-edicion\">7ª Edición</span>",
        "materia": "25. Inmunología",
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "Owen - Punt -  Stranford",
        "origenId": "01MXVTLIJ6Q6ARWJWLFVAJZIUFEOWKFPJ3",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQA-h4EbJsstQJyihSOsor07AfN0sKDOHHd2ab6dLEci16M",
        "carrera": "Bioquímica",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        }
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQA-iqdLg0L1Qb4RafGoBKkNAbyBFSTHqSECTX4Z3DaV3Zg",
        "autor": "Blair Taylor",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "carrera": "Bioquímica",
        "materia": "5. Bioestadística",
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Bioestadistica",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenId": "01MXVTLIJ6RKTUXA2C6VA34ELJ6GUAJKIN",
        "nombreArchivo": "Bioestadistica.Blair.Taylor.pdf"
    },
    {
        "nombreArchivo": "Latarjet - Ruiz Liard Anatomia Humana 5a Edicion T1.pdf",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQA_8Behq0WrSIqunyO1XytPAXh0ZCh7mQD3NgcebY4GlTQ",
        "origenId": "01MXVTLIJ76AL2DK2FVNEIVLU7EO2V6K2P",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Latarjet - Ruiz Liard",
        "estadoPortada": "pendiente",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "materia": "1. Anatomia Humana",
        "titulo": "Latarjet - Ruiz Liard Anatomia Humana <span class=\"libro-edicion\">5° Edición, Tomo 1</span>",
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica"
    },
    {
        "autor": "Ross - Pawlina",
        "titulo": "Histologia: Texto y Atlas Color con Biologia Celular y Molecular <span class=\"libro-edicion\">6° Edición</span>",
        "origenId": "01MXVTLIJA4YABINK5NJEZ65K3ASX5YF6O",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente",
        "carrera": "Bioquímica",
        "origenImportacion": "Bioquimica OneDrive",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAg5gAUNV1qSZ91WwSv3BfOAe0WKxilwJbSEa9jo6lsIgI",
        "materia": "9. Histología Humana",
        "nombreArchivo": "Histologia_Texto_y_Atlas_Color_con_Biologia_Celular_y_Molecular.pdf",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        }
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "materia": "4. Química General",
        "carrera": "Bioquímica",
        "autor": "Departamento Académico de la Editorial Ingenio",
        "estadoPortada": "pendiente",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAgSUfntBTCTpHz6XiUDlD9AUWIJJxBHmR2W1LHGgNF7bI",
        "titulo": "Química I",
        "nombreArchivo": "Química 1°.pdf",
        "origenImportacion": "Bioquimica OneDrive",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "origenId": "01MXVTLIJAJFD6PNAUYJHJD47JPCKA4UH5"
    },
    {
        "autor": "Celis",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenImportacion": "Bioquimica OneDrive",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAgSyCgkv__RbCO3hTswqe1AR8-xwqzQXqUyWqH-EplWc4",
        "materia": "5. Bioestadística",
        "estadoPortada": "pendiente",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "origenId": "01MXVTLIJAJMQKBEX775C3BDW6CTWMFJ5V",
        "nombreArchivo": "Bioestadistica.Celis.pdf",
        "carrera": "Bioquímica",
        "titulo": "Bioestadistica <span class=\"libro-edicion\">3° edición</span>"
    },
    {
        "titulo": "Geometria Analitica - Charles H. Lehmann",
        "carrera": "Bioquímica",
        "origenId": "01MXVTLIJASUV6YVDN3ZGLCZKPFWUVCFHH",
        "nombreArchivo": "Geometria Analitica - Charles H. Lehmann.pdf",
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "12. Geometría Analítica y Cálculo",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAglSvsVG3eTLFlTy2pURTnATk8Mgos2EjYe9MvLcjcYCk",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "CHARLES H. LEHMANN"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente",
        "materia": "37. Quimica Inorganica",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "nombreArchivo": "quimica-inorganica-avanzada-2da-edicion-cotton-wilkinson.pdf",
        "carrera": "Bioquímica",
        "autor": "F. ALBERT COTTON y GEOFFREY WILKINSON",
        "origenId": "01MXVTLIJB6EMVIQ2NZ5DZZHYMAPQCIF5S",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAh8RlUQ03PR5yfDAPgJBeyAb4q5ieFjjtl3qTpVJAJkuo",
        "titulo": "QUIMICA INORGANICA  AVANZADA <span class=\"libro-edicion\">2ed</span>",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "titulo": "La química y nosotros: Estudio de la materia",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente",
        "nombreArchivo": "La química y nosotros-estudio de la materia.pdf",
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "Autor Institucional",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAhMP-uu44TQpTbHifO2mxKAcb2G7TwvooeM90aTrcfCeE",
        "origenId": "01MXVTLIJBGD725O4OCNBJJWY6E7HNU3CK",
        "materia": "4. Química General"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "titulo": "Guyton y Hall Repaso de fisiologia 4a Edicion <span class=\"libro-edicion\">4° Edición</span>",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAhyd7gZpWxSIDbrEzOhmkyAQXiTGUo4ZT63ILUIqrIhn4",
        "estadoPortada": "pendiente",
        "materia": "8. Fisiología Humana",
        "carrera": "Bioquímica",
        "origenId": "01MXVTLIJBZHPOAZUVWFEIBW5MJTHIM2JS",
        "nombreArchivo": "Guyton y Hall Repaso de fisiologia 4a Edicion.pdf",
        "autor": "John E. Hall",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAi4_mGO-f_R4mTsC966E8DAcveZywsp57aN32o6sJh4Q4",
        "carrera": "Bioquímica",
        "autor": "S/A",
        "materia": "38. Quimica Legal y Forense",
        "titulo": "Medicina legal y forense",
        "fechaImportacion": {
            "seconds": 1792413003,
            "nanoseconds": 226000000
        },
        "origenImportacion": "Bioquimica OneDrive",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "Medicina legal y forense.pdf",
        "estadoPortada": "pendiente",
        "origenId": "01MXVTLIJC4P4YMO7H75DYTE5QF55OQTYD"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente",
        "autor": "Dr. Santiago Nogué Xarau",
        "nombreArchivo": "Toxicologia Clinica.pdf",
        "materia": "19. Toxicología",
        "origenImportacion": "Bioquimica OneDrive",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAi89n6LAmrQomRG-WLOmP8AUeKcnMIZO0tiEn0s1SxpIQ",
        "origenId": "01MXVTLIJC6PM7ULAJVNBITEI34WFTUY74",
        "titulo": "Toxicologia Clinica",
        "carrera": "Bioquímica"
    },
    {
        "origenId": "01MXVTLIJCSBUP2MFBQBGKATZGQOMXZ3BO",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "Radioisotopía.pdf",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "titulo": "Radioisotopía",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAikGj9MKGATKBPJoOZfOwuAaM0c_k_WgYre9Awvf3Yfb4",
        "materia": "31. Metodología de Radiosótopos",
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "autor": "Amezcua Montiel Abril (et al)"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Santillana",
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "17. Fisicoquímica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAkiTsa9X-rQp07pMHu1tOVAWnQP3xgowX2pe0eCSVWpB4",
        "estadoPortada": "pendiente",
        "nombreArchivo": "FISICA 3.pdf",
        "titulo": "FISICA <span class=\"libro-edicion\">3° AÑO</span>",
        "origenId": "01MXVTLIJERE5RV5L7VNBJ2O5EYHXNNU4V",
        "carrera": "Bioquímica",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        }
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAm23GwN9S3QIciuq06m3znAfpwwbsGfl5-khV3dZtzNDA",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Biologia Celular y Molecular <span class=\"libro-edicion\">16° Edición</span>",
        "materia": "2. Biología General",
        "autor": "De Robertis",
        "nombreArchivo": "De Robertis Biologia Celular y Molecular.pdf",
        "origenId": "01MXVTLIJG3NY3AN6UW5AIOIV2VU5JW7HH",
        "estadoPortada": "pendiente",
        "carrera": "Bioquímica"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenId": "01MXVTLIJGDKHUBBQTRZBI2GC5DDRBVE37",
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "Harpers",
        "estadoPortada": "pendiente",
        "materia": "18. Bioquímica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAmGo9AhhOOQo0YXRjiGpN_AVpap01JsquUMy6iM6ikSoE",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "titulo": "Bioquimica Ilustrada <span class=\"libro-edicion\">30° Edición</span>",
        "carrera": "Bioquímica",
        "nombreArchivo": "Harpers Bioquimica Ilustrada 30a Edicion.pdf"
    },
    {
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLIJHO2YU4X7XTBC23UAHHHV2IA4A",
        "titulo": "Química - El átomo - Modelos atómicos",
        "nombreArchivo": "Química-El átomo - Modelos atómicos.pdf",
        "materia": "4. Química General",
        "autor": "Cesar Urquizo y  Ricardo Vega",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAndrFOX_eYRa3QBznrpAOAASwAstr0RyJW24jvgtT3CS8"
    },
    {
        "materia": "3. Metodología de Estudio",
        "carrera": "Bioquímica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenId": "01MXVTLIJIIUAIDYVEZZDLIZZA7NZQ4CQR",
        "estadoPortada": "pendiente",
        "titulo": "El método Delphi <span class=\"libro-edicion\">articulo</span>",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "autor": "Mercedes Reguant Álvarez y Mercedes Torrado Fonseca",
        "nombreArchivo": "El método Delphi.pdf",
        "origenImportacion": "Bioquimica OneDrive",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAoRQCB4qTORrRnIPtzDgoRAZQJro3-ENtsYz_XaxPTrac"
    },
    {
        "origenId": "01MXVTLIJILUKESNIAVRCKEBUOZ6QW6VAS",
        "nombreArchivo": "Microbiologia Clinica.pdf",
        "materia": "2. Biología General",
        "carrera": "Bioquímica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente",
        "titulo": "Microbiologia Clinica",
        "origenImportacion": "Bioquimica OneDrive",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAoXRRJNQCsRKIGjs-hb1QSAXI9-IbNiV0tjkSCiIMTcUg",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "autor": "Keith Struthers"
    },
    {
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente",
        "titulo": "Biología, la vida en la tierra con fisiología <span class=\"libro-edicion\">9° Edición</span>",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "origenId": "01MXVTLIJMK2ME237QA5CL75RWSNEDJUAD",
        "nombreArchivo": "Biología, la vida en la tierra con fisiología-9° Edición.pdf",
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "2. Biología General",
        "autor": "Audesirk - Audesirk - Byers",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAsVphNb_AHRL_2NpNINNADAczw5KP_pTbXxPguv-xaAJE"
    },
    {
        "estadoPortada": "pendiente",
        "materia": "6. Cálcula Diferencial e Integral",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenId": "01MXVTLIJMTKQN24VQWZDI7MQSSKGQDSMW",
        "autor": "Pearson",
        "carrera": "Bioquímica",
        "nombreArchivo": "Calculo-Diferencial-Pearson.pdf",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Calculo Diferencial",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAsmqDdcrC2Ro-yEpKNAcmWAYqglq0Pr4cfglDdTVpRp9w"
    },
    {
        "carrera": "Bioquímica",
        "titulo": "Hematología Analítica <span class=\"libro-edicion\">TOMO 1</span>",
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "nombreArchivo": "Hematología Analítica.pdf",
        "materia": "27. Hematología",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "autor": "Berta E. Valverde Rojas et al",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAu4G3GrQXZTIVD1a8csOLWAaWNOiGSfdRRcksjrHtEpjA",
        "origenId": "01MXVTLIJO4BW4NLIF3FGIKQ6VV4OLBYWW"
    },
    {
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "titulo": "QUÍMICA: Selección de prácticas y ejercicios de clase resueltos",
        "materia": "4. Química General",
        "autor": "Prof. Joel K. Rojas Mendoza",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAuZaSmYPsbRrBKBZ-CCxnbAaMs56oMVlznNw8ny8xV-5U",
        "nombreArchivo": "QUÍMICA (2).pdf",
        "origenId": "01MXVTLIJOMWSKMYH3DNDLASQFT6BAWGO3",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "estadoPortada": "pendiente"
    },
    {
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente",
        "origenId": "01MXVTLIJOR2R6TDSYHRHKD3YWJHWVXOK2",
        "titulo": "Calculo I y II (1) <span class=\"libro-edicion\">8° Edición</span>",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "nombreArchivo": "Larsson. Calculo I y II (1).pdf",
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "12. Geometría Analítica y Cálculo",
        "autor": "Larsson",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAujqPpjlg8TqHvFkntW7laAevcNd75-lDNhohaZ2MRetk"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "estadoPortada": "pendiente",
        "titulo": "Radiofármacos: Del laboratorio al paciente",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAvmUSUgHGYR5XHAAsXioQIAepweOBjqM34dqK_ugFxbhA",
        "nombreArchivo": "Radiofármacos del laboratorio al paciente.pdf",
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "origenId": "01MXVTLIJPTFCJJADRTBDZLRYABMLYVBAI",
        "autor": "Carlos Oscar Cañellas, María Jimena Salgueiro y Marcela Zubillaga",
        "materia": "31. Metodología de Radiosótopos",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "titulo": "Infecciosas y Microbiologia <span class=\"libro-edicion\">14° Edición</span>",
        "carrera": "Bioquímica",
        "materia": "32. Parasitología",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAxEmd3wUSXR5hK1q46RFIrAR3ER6bRK0oNL_MYYGsfqns",
        "nombreArchivo": "Infecciosas AMIR 14va Edición.pdf",
        "origenImportacion": "Bioquimica OneDrive",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenId": "01MXVTLIJRCJTXPQKES5DZQSWWVY5EIURL",
        "autor": "MANUAL AMIR"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAyqsJ6NLtpTKx4Ioqok6nFAZXJKdK5pnSUmbR7rh9f68U",
        "autor": "S. M. Lewis  B. J. Bain L.Bates",
        "nombreArchivo": "Dacie Lewis Hematologia Practica.pdf",
        "origenImportacion": "Bioquimica OneDrive",
        "estadoPortada": "pendiente",
        "materia": "27. Hematología",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "origenId": "01MXVTLIJSVLBHUNF3NFGKY6BCRKUJHKOF",
        "titulo": "Hematologia Practica <span class=\"libro-edicion\">10° Edición</span>",
        "carrera": "Bioquímica"
    },
    {
        "titulo": "Manual de espanol: Tejiendo el espanol A1 (1)",
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLIJTCNMNR4FCPRAKWHYB2NAXI5GL",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQAzE1jY8KJ8QKsfAdNBdHTLAY4vpoxte359gi_dizhcaz8",
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Carolina Delgado de Pablo et al",
        "nombreArchivo": "Manual-de-espanol-Tejiendo-el-espanol-A1 (1).pdf",
        "materia": "7. Comunicación Oral y Escrita en Castellano"
    },
    {
        "autor": "Alberts",
        "carrera": "Bioquímica",
        "materia": "2. Biología General",
        "titulo": "Biologia Molecular <span class=\"libro-edicion\">5a Edicion</span>",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQA0tRaPjcPQTLCjt623gECAASxmaKg-tePINM1HiFitBlg",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "origenImportacion": "Bioquimica OneDrive",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "Alberts Biologia Molecular 5a Edicion.pdf",
        "origenId": "01MXVTLIJUWULI7DOD2BGLBI5XVW3YAQEA"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenImportacion": "Bioquimica OneDrive",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "materia": "17. Fisicoquímica",
        "origenId": "01MXVTLIJVHRTKA4L25VAZVILL6LIJFBB4",
        "autor": "Alberto L. Capparelli",
        "carrera": "Bioquímica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQA1PGagcXrtQZqha_LQkoQ8AZ0moCVGFPOzOTuf4aWdrFk",
        "nombreArchivo": "Fisicoquímica Básica-Alberto L. Capparelli.pdf",
        "titulo": "Fisicoquímica Básica <span class=\"libro-edicion\">1° Edición</span>",
        "estadoPortada": "pendiente"
    },
    {
        "nombreArchivo": "Berne & Levi Fisiologia 6a Edicion.pdf",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "titulo": "Fisiologia <span class=\"libro-edicion\">6a Edicion</span>",
        "estadoPortada": "pendiente",
        "origenId": "01MXVTLIJVLWYUXSIZLJG36YOECAMKIS4D",
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "Berne & Lev",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQA1XbFLyRlaTb9hxBAYpEuDAWY6kKNFqTeIA9LPojqE-do",
        "materia": "21. Genética"
    },
    {
        "carrera": "Bioquímica",
        "titulo": "Atlas citologia vaginal",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQA3lnQkeeb3QKSCUuftCr0XAUsOeIwbt5k58yiF296nP_0",
        "materia": "14. Citología Clínica",
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLIJXSZ2CI6PG65AKJASS47WQVPIX",
        "estadoPortada": "pendiente",
        "autor": "Alizin",
        "nombreArchivo": "Alizin. Atlas citologia vaginal.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        }
    },
    {
        "origenId": "01MXVTLIJYPHNSAKXCARCL75VQUNI6S7GZ",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenImportacion": "Bioquimica OneDrive",
        "nombreArchivo": "calculo-diferencial-e-integral-con-aplicaciones-prof-elsie-hernandez.pdf",
        "titulo": "CÁLCULO DIFERENCIAL E INTEGRAL, CON APLICACIONES.",
        "materia": "6. Cálcula Diferencial e Integral",
        "autor": "Prof. Elsie Hernández S.,",
        "carrera": "Bioquímica",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQA4edsgKuIERL_2sKNR6XzZAS0TwbDwJGUb97DC8-QzUyo",
        "estadoPortada": "pendiente"
    },
    {
        "autor": "Departamento Académico de la Editorial Ingenio",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "Química 2°.pdf",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQA4xSCHxR2USKnLi3cQBmeNAYi5J6_uib0RZW3vIuw4LCY",
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "4. Química General",
        "origenId": "01MXVTLIJYYUQIPRI5SREKTS4LO4IAMZ4N",
        "titulo": "Química II",
        "carrera": "Bioquímica"
    },
    {
        "titulo": "Química V",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBb6noMpKinQ7Kn7JpdppqtAXpWOAfYjwhXZ6uENHhNo6E",
        "autor": "Departamento Académico de la Editorial Ingenio",
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "nombreArchivo": "Química 5°.pdf",
        "estadoPortada": "pendiente",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "origenId": "01MXVTLIK35J5AZJFIU5B3FJ7MTJO2NGVN",
        "materia": "4. Química General",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "nombreArchivo": "Quimica Biologica 10a Edicion.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenImportacion": "Bioquimica OneDrive",
        "estadoPortada": "pendiente",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "titulo": "Química Biológica <span class=\"libro-edicion\">10ed</span>",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBbOIHJLEQCRYmS7mqoLDhNAeVRLjI4_GDbLuyyxTU3VrI",
        "materia": "4. Química General",
        "carrera": "Bioquímica",
        "origenId": "01MXVTLIK3HCA4SLCEAJCYTEXONKUCYOCN",
        "autor": "Antonio Blanco y Gustavo Blanco"
    },
    {
        "estadoPortada": "pendiente",
        "carrera": "Bioquímica",
        "autor": "Moore - Persaud - Torcliía",
        "materia": "9. Histología Humana",
        "titulo": "Moore - Embriologia Clinica 9ª Edicion <span class=\"libro-edicion\">9° Edición</span>",
        "nombreArchivo": "Moore - Embriologia Clinica 9ª Edicion.pdf",
        "origenId": "01MXVTLIK3THSYO4XR6RCJ7CVGK4PLVVH7",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "origenImportacion": "Bioquimica OneDrive",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBbmeWHcvH0RJ-KplceutT_AZ1drXVqmS4a0L-0bZtE54I"
    },
    {
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Autor Institucional",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "origenImportacion": "Bioquimica OneDrive",
        "nombreArchivo": "Gramatica Guarani.pdf",
        "materia": "13. Comunicación Oral y Escrita Guaraní",
        "origenId": "01MXVTLIK3VWF4H5MFIFHJ7PQYWMUUAYKU",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBbrYvD9YVBTp--GLMpQGFUAb2fDdpYHODS7lUmyLVGTX4",
        "titulo": "Gramatica Guarani <span class=\"libro-edicion\">Version corregida 2020</span>",
        "carrera": "Bioquímica"
    },
    {
        "origenId": "01MXVTLIK4ERWMCZ5BYNEI62F2CBENEW6S",
        "nombreArchivo": "Anatomía Humana - Rouviere III 11  Edición.pdf",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "materia": "1. Anatomia Humana",
        "carrera": "Bioquímica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Anatomía Humana -III <span class=\"libro-edicion\">11  Edición</span>",
        "autor": "Rouviere",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBcJGzBZ6HDSI9ouhBI0lvSAdKJwjf9kp5BrdSrzTU3gLw"
    },
    {
        "autor": "de Keith L. Moore",
        "carrera": "Bioquímica",
        "origenId": "01MXVTLIK6YBXNVFESCZGYUKXFCRDGGYPC",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "materia": "9. Histología Humana",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBewG7alJIWTYoq5RRGY2HiAUKLeAW8AT2yaImt5o3NjBM",
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "EMBRIOLOGÍA CLÍNICA <span class=\"libro-edicion\">9° ED</span>",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "04 EMBRIOLOGÍA CLÍNICA de Keith L. Moore.pdf"
    },
    {
        "origenImportacion": "Bioquimica OneDrive",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "origenId": "01MXVTLIKAAY7KZVEZPBALQCEAZ5ZAOY57",
        "nombreArchivo": "CALCULO_1_De_una_variable,_Ron_Larson_y_Bruce_H_Edwards,_9na_Ed.pdf",
        "materia": "12. Geometría Analítica y Cálculo",
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBABj6s1Jl4QLgIgM9yB2O_AS4ZeCrR6_iXQjOXb-CHp3Q",
        "autor": "Ron Larson y Bruce H Edwards,",
        "titulo": "CALCULO 1 : De una variable <span class=\"libro-edicion\">9na Ed</span>"
    },
    {
        "materia": "23. Biotecnología",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBBA_GOmO4JRZBoy1PoHhBDAZIMbVpzSKNLJnrPKGxhDGU",
        "carrera": "Bioquímica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Biotecnologia Para Principiantes",
        "estadoPortada": "pendiente",
        "origenId": "01MXVTLIKBAPYY5GHOBFCZA2GLKPUB4ECD",
        "autor": "Reinhard Renneberg",
        "nombreArchivo": "Biotecnologia Para Principiantes.pdf"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBBYLFVu4BiR5fX7DnJahtBAQm_d1Ake2LdgBfgT7_HiuM",
        "origenImportacion": "Bioquimica OneDrive",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Dr. Gerardo Martín González López, Dr. Dolores Javier Sánchez González y Dr. Carlos Armando Sosa Luna",
        "origenId": "01MXVTLIKBMCYVLO4AMJDZPV7MHHEWUG2B",
        "materia": "21. Genética",
        "estadoPortada": "pendiente",
        "nombreArchivo": "Terapia celular con celulas madre y medicina regenerativa_booksmedicos.org.pdf",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "titulo": "Terapia celular con celulas madre y medicina regenerativa",
        "carrera": "Bioquímica"
    },
    {
        "titulo": "Anatomia y movimiento humano: Estructura y funcionamiento",
        "origenId": "01MXVTLIKCAVCZHS6QNVBZBHDXCIHNLAJ2",
        "carrera": "Bioquímica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBCBUWTy9BtQ5CcdxIO1YE6ATClWM_WaR0C2NL8prqjIP4",
        "estadoPortada": "pendiente",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "Anatomia y movimiento humano. Estructura y funcionamiento.pdf",
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "1. Anatomia Humana",
        "autor": "NIGEL PALASTANGA, DEREK FIELD y ROGER SOAMES"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBCNYSo1Cf3QJPQCBDoBsnZAZ3lJocciSXgq6wtulZUTnw",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "Laboratorio de Microbiologia.pdf",
        "titulo": "Laboratorio de Microbiologia",
        "autor": "José González Alfaro, Boris González González y Rosa T. Barrial González,",
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "22. Microbiología General",
        "origenId": "01MXVTLIKCGWCKRVBH65AJHUAICDUANSOZ",
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente"
    },
    {
        "autor": "Sigma",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBCPwTt5vQGSpEgo60Av_BnASrIs53_tlYr9lGVb58_OxA",
        "titulo": "Matematica: Boletin 5 academia",
        "nombreArchivo": "Boletin 5 academia Sigma.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "origenId": "01MXVTLIKCH4CO3ZXUAZFJCIFDVUAL74DH",
        "materia": "4. Química General",
        "origenImportacion": "Bioquimica OneDrive",
        "estadoPortada": "pendiente"
    },
    {
        "autor": "Autor Institucional",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBCdt4mwe8kSJK7wJwrGZb3AY9Cq8DI1S9vSyX32iqrpLE",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "titulo": "Manual de Gastroenterologia Clinica <span class=\"libro-edicion\">2° Edición</span>",
        "nombreArchivo": "Manual de Gastroenterologia Clinica.pdf",
        "origenImportacion": "Bioquimica OneDrive",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "materia": "20. Bromatología y Bioquímica Nutricional",
        "origenId": "01MXVTLIKCO3PCNQPPEREJFO6ATQVRTFXX",
        "estadoPortada": "pendiente"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "origenId": "01MXVTLIKD2CZASAEVH5CYZFQD7AFPNKSV",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBD0LIJAJU_RYyWA_gK9qpVATF780AXxYSsRdVToT_fUio",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Jorge Eduardo Guerrero De León y Lorena Ramírez González",
        "estadoPortada": "pendiente",
        "materia": "9. Histología Humana",
        "titulo": "Repaso de Histología: Un libro de preguntas y respuestas <span class=\"libro-edicion\">1ed</span>",
        "carrera": "Bioquímica",
        "nombreArchivo": "Repaso de Histologia.pdf",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente",
        "titulo": "Quimica 2",
        "materia": "4. Química General",
        "origenId": "01MXVTLIKD3YPN4T3XKBAY4UQKRCIB7ERC",
        "carrera": "Bioquímica",
        "autor": "Prof Joel K. Rojas Mendoza",
        "origenImportacion": "Bioquimica OneDrive",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBD3h7eT3dQQY5SCoiQH5IiAXqCd31xNTk9HmNNOpWhzS4",
        "nombreArchivo": "Folleto cepre uni Quimica 2.pdf"
    },
    {
        "titulo": "Química general e Inorganica",
        "estadoPortada": "pendiente",
        "carrera": "Bioquímica",
        "autor": "Fernández Serventi",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBDzp_-xIzYR44FUzFu11mwAbj0Pg6wmnaSOIhWuZuhmqM",
        "origenImportacion": "Bioquimica OneDrive",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenId": "01MXVTLIKDZ2P75REM3BDY4BKTGFXNOWNQ",
        "nombreArchivo": "Química general e Inorganica.pdf",
        "materia": "37. Quimica Inorganica"
    },
    {
        "origenId": "01MXVTLIKDZJF73PIZHJDL3JSCNKNCJX77",
        "nombreArchivo": "Atlas de Hematología con interpretación de histogramas y escatergramas - Abbott.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Atlas de Hematología con interpretación de histogramas y escatergramas",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBDykv9vRk6Rr2mQmqaJN__AQuNdiqWALVYrDvvozoYsmA",
        "materia": "27. Hematología",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "carrera": "Bioquímica",
        "autor": "Abbott"
    },
    {
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "etica medica amm.pdf",
        "origenId": "01MXVTLIKEHISEEAKODFBYGCD5T3OGGDGP",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "titulo": "etica medica",
        "materia": "10. Ética y Bioética",
        "carrera": "Bioquímica",
        "autor": "ASOCIACIÓN MÉDICA MUNDIAL",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBEOiRCAU4ZQ4MIfZ7cYwzPAYezA9HGqx7UERimfo70RGo"
    },
    {
        "estadoPortada": "pendiente",
        "materia": "26. Metodología de la Investigación",
        "nombreArchivo": "Metodología de la Investigación. un enfoque práctico.pdf",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBEfKMa_gIeSZUTx0JqrJQTAWT1Gt8at8wXwh0Ef7xezhY",
        "carrera": "Bioquímica",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Autor Institucional",
        "titulo": "Metodología de la Investigación: Un enfoque práctico",
        "origenId": "01MXVTLIKEPSRRV7QCDZEZKE6HIJVKZFAT",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "21. Genética",
        "origenId": "01MXVTLIKERDQI4D4YVBDKTAD42XWQN4OT",
        "carrera": "Bioquímica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBEiOCOD5ioRqmAfNXtBvHTAU9nCVpE_7AQjaID-90PUVs",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Victoria del Castillo Ruiz",
        "nombreArchivo": "Genetica Clinica 2a Edicion.pdf",
        "titulo": "Genetica Clinica <span class=\"libro-edicion\">2° Edición</span>",
        "estadoPortada": "pendiente",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        }
    },
    {
        "estadoPortada": "pendiente",
        "materia": "21. Genética",
        "carrera": "Bioquímica",
        "nombreArchivo": "Genetica.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLIKFHB76NEHKHFDKGDN4SVVEUSJB",
        "titulo": "Genetica <span class=\"libro-edicion\">14° Edición</span>",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBFOH_mkOo5RqMNvJVqSkkhARvRQKo6jCo9kIs6eXvM9XU",
        "autor": "Sara Calleja Antolín"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBFStVpJxujSZ0aJAm-AAiRAe11vG8XbGlU9nS3Mhl9t-A",
        "titulo": "Metodologia de la investigación",
        "origenImportacion": "Bioquimica OneDrive",
        "nombreArchivo": "metodologia-de-la-investigación_sampieri.pdf",
        "estadoPortada": "pendiente",
        "origenId": "01MXVTLIKFJLKWSJY3UNEZ2GREBG7AACER",
        "carrera": "Bioquímica",
        "autor": "sampieri",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "materia": "26. Metodología de la Investigación"
    },
    {
        "materia": "22. Microbiología General",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "autor": "Murray et al",
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "nombreArchivo": "Microbiologia Medica Murray.pdf",
        "origenId": "01MXVTLIKGC6RGNGOETBFJZOKS675MBSHK",
        "estadoPortada": "pendiente",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBGF6JmmcSYSpy5Uvf6wMjqAQzbZZBuZ4C7jruyf85khXE",
        "titulo": "Microbiologia Medica"
    },
    {
        "origenId": "01MXVTLIKGWJG3TOD2BNFLURMN5EUAJMM2",
        "nombreArchivo": "Fisiopatologia_Bases_biologicas_de_la_enfermedad_en_adultos_y_niños.pdf",
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "11. Fisiopatología Humana",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente",
        "titulo": "Fisiopatologia: Bases biologicas de la enfermedad en adultos y niños <span class=\"libro-edicion\">8° Edición</span>",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBGsk25uHoLSrpFjekoBLGaAUp0nDF04y-Rd1wRXe5VJgs",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "autor": "KATHRYN-SUE"
    },
    {
        "autor": "Rina Girard de Kamínsky, M.Sc",
        "carrera": "Bioquímica",
        "materia": "32. Parasitología",
        "origenImportacion": "Bioquimica OneDrive",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBH-85EM5gwQYNJldMuYTgXAbb_KvkYN82w0NXk4qA3ILI",
        "titulo": "Manual Parasitologia: Métodos para Laboratorios de  Atención Primaria de Salud <span class=\"libro-edicion\">2° Edición</span>",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "nombreArchivo": "Manual Parasitologia 2007.pdf",
        "origenId": "01MXVTLIKH7PHEIM4YGBAYGSMV2MXGCOAX",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente"
    },
    {
        "materia": "15. Ingles Técnico",
        "origenId": "01MXVTLIKIRX5YENYC3NGYBTUQL3QSFQUT",
        "estadoPortada": "pendiente",
        "autor": "Jack C. Richards",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "INTERCHANGE 3.pdf",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBIjfuCNwLbTYDOkF7hIsKTAduu_wLdPjk-w5zTvboNtbY",
        "carrera": "Bioquímica",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "INTERCHANGE 3 <span class=\"libro-edicion\">4° Edición</span>"
    },
    {
        "origenId": "01MXVTLIKJGUJZEE7JJ5AKDG3IXOQRGLPU",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBJNROSE-lPQKGbaLuhEy30AU0czgi44bXoUh9OPj8J4dE",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "LENHINGER",
        "estadoPortada": "pendiente",
        "materia": "18. Bioquímica",
        "titulo": "BIQUÍMICA <span class=\"libro-edicion\">4° Edición</span>",
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "nombreArchivo": "BIQUÍMICA LENHINGER.pdf"
    },
    {
        "origenImportacion": "Bioquimica OneDrive",
        "nombreArchivo": "Quimica - Manual esencial Santillana.pdf",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBJUpkOi4-cS5K9prcvDZ2SAUziBTMI5qi3HApADR4V0-w",
        "carrera": "Bioquímica",
        "autor": "Mario Ávila Garrido, Patricia Calderón Valdés y Claudia Maureria Quintanilla",
        "materia": "17. Fisicoquímica",
        "estadoPortada": "pendiente",
        "titulo": "Quimica - Manual esencial Santillana",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenId": "01MXVTLIKJKKMQ5C4PTRFZFPNGW4XQ3HMS",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        }
    },
    {
        "carrera": "Bioquímica",
        "titulo": "Bioética Complutense",
        "materia": "10. Ética y Bioética",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBJj0FhsOL8Q567tXNqJaaBAWt3Nv4E7tB7kngOm5irJAA",
        "autor": "S/A",
        "nombreArchivo": "Bioética Complutense.pdf",
        "estadoPortada": "pendiente",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLIKJR5AWDMHC7RBZ5O5VONVCLJUB",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "materia": "4. Química General",
        "nombreArchivo": "Quimica La Ciencia Central 12°ed..pdf",
        "origenId": "01MXVTLIKJV5B7OVUN4VHLL75E3SAUKW55",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente",
        "autor": "H. EUGENE LEMAY. JR., CATHERINE J. MURPHY, BRUCE E. BURSTEN y PATRlCK M. WOODWARD",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBJr0P3Vo3lTrX_pNyBRVu9Aef5zQYNktvF9psYVcbWSCo",
        "titulo": "Quimica La Ciencia Central 12°ed. <span class=\"libro-edicion\">12ed</span>",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBKvqFTqy2WTLA-tvHCDBHJAT_fR5v_tYm6FZKasNmPsvQ",
        "autor": "María Victoria Gómez de Erice et al",
        "carrera": "Bioquímica",
        "materia": "7. Comunicación Oral y Escrita en Castellano",
        "titulo": "gramatica",
        "origenImportacion": "Bioquimica OneDrive",
        "nombreArchivo": "gramatica.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenId": "01MXVTLIKKX2QVHKZNSZGLAPVW6HBAYEOJ",
        "estadoPortada": "pendiente",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        }
    },
    {
        "autor": "Cesar Urquizo y Ricardo Vega",
        "carrera": "Bioquímica",
        "materia": "4. Química General",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBKvk0hzVVcT7Dnvr3nYXnaAW6KY8Ykt1F2y_1iHuOZhS8",
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Química: Cálculos químicos",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "nombreArchivo": "Química-Cálculos químicos.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenId": "01MXVTLIKKXZGSDTKVLRH3BZ56XXTWC6O2",
        "estadoPortada": "pendiente"
    },
    {
        "carrera": "Bioquímica",
        "origenImportacion": "Bioquimica OneDrive",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "titulo": "Química",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBL1xLHIezfToZ-MAqg3gkOAWMQhNy9VYbHC7QR8E-F96k",
        "materia": "4. Química General",
        "autor": "Lic. Alcántara Malca, Daniel (et al)",
        "nombreArchivo": "quimica-cepre-unipdf_compress.pdf",
        "origenId": "01MXVTLIKL24JMOIPM35HIM7RQBKQN4CIO",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "materia": "24. Farmacología",
        "autor": "Luis Cabeza Osorio y Héctor Cristóbal Gutiérre",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBLm-uJdzr3RIAfjt_QjR16AWDs_ChfAhfve8X3VSo8Tfo",
        "nombreArchivo": "Farmacologia.pdf",
        "carrera": "Bioquímica",
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLIKLTPVYS5Z265CIAH4O37II2HL2",
        "titulo": "Farmacologia <span class=\"libro-edicion\">14° Edición</span>"
    },
    {
        "autor": "S/A",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBM6fAq-8NDTZGehEmYiDfTAbznJ1UBl9RqmVuz8c68lgk",
        "titulo": "Marco Curricular de la Educación Comunitaria Modelo ABCD",
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "materia": "3. Metodología de Estudio",
        "nombreArchivo": "Marco Curricular de la Educación Comunitaria Modelo ABCD.pdf",
        "origenId": "01MXVTLIKM5HYCV66DINGZDHUEJGMIQN6T"
    },
    {
        "titulo": "Introduccion a la Genetica Clinica <span class=\"libro-edicion\">1° Edición</span>",
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "nombreArchivo": "Introduccion a la Genetica Clinica.pdf",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBN0x_nfeOtT7aui41gr3VgAYuCO2nxFFbqKqAPOa-p5H4",
        "carrera": "Bioquímica",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Araceli Lantigua Cruz",
        "origenId": "01MXVTLIKN2MP6O7PDVVH3NLULRVQK65LA",
        "materia": "21. Genética"
    },
    {
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "17. Fisicoquímica",
        "carrera": "Bioquímica",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "Físico Química.pdf",
        "titulo": "Físico Química",
        "autor": "Alejandro Ferrari et al",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBNCZu9GYQUQoo0RsjQTKleAfsaBIgEg3-33qkq1hMcHyk",
        "origenId": "01MXVTLIKNBGN32GMECRBIUNCGZDIEZKK6"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "carrera": "Bioquímica",
        "nombreArchivo": "Química bancos de preguntas y respuestas.pdf",
        "origenId": "01MXVTLIKNHJ2OX2342BC22A7FLW5NODQT",
        "titulo": "QUÍMICA Banco de Preguntas y Respuestas – Breve  Teoría <span class=\"libro-edicion\">1ed</span>",
        "estadoPortada": "pendiente",
        "materia": "4. Química General",
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "UNIVERSIDAD MAYOR DE SAN ANDRÉS FACULTAD DE INGENIERÍA",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBNOnTr63zQRa0D5V261w4TAdpfed6UYxwRYUb0zXkkQl8"
    },
    {
        "autor": "ALEJANDRO VÉLEZ HOYOS",
        "carrera": "Bioquímica",
        "origenId": "01MXVTLIKNLW44FMBWOND3MHTOGL4IDVVL",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBNXbnCsDZzR7YebjL4gdarAU_jaAb5Kw3OOIihDixwyOg",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "materia": "14. Citología Clínica",
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Manual de Citología <span class=\"libro-edicion\">1° Edición</span>",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "Manual de Citología.pdf"
    },
    {
        "origenImportacion": "Bioquimica OneDrive",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "autor": "Miguel Ángel Sánchez González",
        "titulo": "Bioetica en Ciencias de la Salud",
        "origenId": "01MXVTLIKNO5SEHKUED5GIX77KT7XXLVA6",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBNd2RDqoQfTIv_6p_vddQeAblg0-B8Dm8V_nCJhcz6Fow",
        "materia": "10. Ética y Bioética",
        "nombreArchivo": "Bioetica en Ciencias de la Salud.pdf"
    },
    {
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "30. Salud Pública y Epidemiología",
        "carrera": "Bioquímica",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "Manual de epidemiologia y salud publica.pdf",
        "titulo": "Manual de epidemiologia y salud publica",
        "autor": "Hernández-Aguado • Gil • Delgado • Bolumar",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBNqBSFjjpSSK-0Q4xu7W7_AaRXz9C8ff688Tz5DzlVhPw",
        "origenId": "01MXVTLIKNVAKILDR2KJEK7NCDRRXO23X7"
    },
    {
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLIKO42SEHNCEKVHLENTOLL2ACSHH",
        "titulo": "Biologia Celular Biomedica",
        "materia": "2. Biología General",
        "nombreArchivo": "Biologia Celular Biomedica.pdf",
        "autor": "Alfonso Calvo",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBO5qRDtERVTrI2blr0AUjnARtMNQmGCNAI5WBdA3N-ars"
    },
    {
        "estadoPortada": "pendiente",
        "carrera": "Bioquímica",
        "titulo": "Biología 3: Los Códigos de la Vida",
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "2. Biología General",
        "nombreArchivo": "Biología 3-Los Códigos de la Vida-D.Aljanati.pdf",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBO9hjiYWWASaeOny3T-07IAduuv_b6FcgZTHgKPyXn_S8",
        "origenId": "01MXVTLIKO6YMOEYLFQBE2PDU7FXJ7WTWI",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "D.Aljanati",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        }
    },
    {
        "nombreArchivo": "Biologia Molecular y Celular 9a Edicion.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "titulo": "Biologia Molecular y Celular <span class=\"libro-edicion\">9° Edición</span>",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBPv6f2vE5HQ7jSUrOSUexyATceH0cE-RIv7GZ7JTIxIps",
        "materia": "2. Biología General",
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLIKPX6T7NPCOI5B3RUSSWOJFD3DS",
        "carrera": "Bioquímica",
        "autor": "Amon, Berk, Bretscher, Kaiser, Krieger, Lodish, Martin, Ploegh, Yaffe"
    },
    {
        "materia": "35. Quimica Ambiental",
        "carrera": "Bioquímica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenId": "01MXVTLIKQDVSHIR4YK5CJYAUDQ7UUZUWI",
        "titulo": "Química: Metalurgía, Contaminación Ambiental y Química Aplicada",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "estadoPortada": "pendiente",
        "nombreArchivo": "Química Aplicada-Ambiental.pdf",
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "Miguel Zavala Vargas",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBQHWR0R5hXRJwCg4fpTNLIAQ5UQhLZCqf4uOnP9LUW4wI"
    },
    {
        "carrera": "Bioquímica",
        "titulo": "Nutrición y Dietética Clínica <span class=\"libro-edicion\">3ed</span>",
        "origenId": "01MXVTLIKQQ7GD3RIN7NHZAWBA22VJIU4X",
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "20. Bromatología y Bioquímica Nutricional",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "estadoPortada": "pendiente",
        "nombreArchivo": "Nutricion y Dietetica Clinica 3a Edicion_booksmedicos.org.pdf",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBQh8w9xQ37T5BYINaqlFOXAd3PKstIdDdaVjRJw2tgHTE",
        "autor": "Jordi Salas-Salvadó, Anna Bonada i Sanjaume, Roser Trallero Casañas, M. Engracia Saló i Sola y Rosa Burgos Peláez",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLIKR5KSNHYGUMVFJUB2IXAPZE34D",
        "titulo": "Manual básico de prácticas de biotecnología <span class=\"libro-edicion\">1° Edición</span>",
        "nombreArchivo": "Manual básico de prácticas de biotecnología.pdf",
        "materia": "23. Biotecnología",
        "autor": "Barrigas et al",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBR6qTT4NRlSpoHSLgfkm-DAWZ0WKMBTJigplrrAk9rHH4"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "carrera": "Bioquímica",
        "titulo": "PROPEDÉUTICA CLÍNICA Y SEMIOLOGÍA MÉDICA <span class=\"libro-edicion\">Tomo II</span>",
        "materia": "28. Clínica",
        "autor": "Dr. Raimundo Llanio Navarro y Dr. Gabriel Perdomo González",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenImportacion": "Bioquimica OneDrive",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBRQsw551wPRJKnA6MaXKs9Ada6j5LYaySjP8cDIQP2d-4",
        "nombreArchivo": "PROPEDEUTICA CLINICA Y SEMIOLOGIA MEDICA Tomo II.pdf",
        "origenId": "01MXVTLIKRILGDTZ24B5CJFJYDUMNFZKZ5",
        "estadoPortada": "pendiente"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBTkcJhUApbSpUpmzPbpbM8AYb28PGTrcsEbrBFbT3wCq4",
        "autor": "daniel",
        "carrera": "Bioquímica",
        "materia": "5. Bioestadística",
        "titulo": "bioestadistica <span class=\"libro-edicion\">4° edición</span>",
        "nombreArchivo": "bioestadistica - daniel.pdf",
        "origenImportacion": "Bioquimica OneDrive",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenId": "01MXVTLIKTSHBGCUAKLNFJKKM3GPN2LMZ4",
        "estadoPortada": "pendiente",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        }
    },
    {
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente",
        "nombreArchivo": "PREGRADO_HEMATOLOGIA 5°ed.pdf",
        "autor": "José M.ª Moraleda Jiménez, Miguel Blanquer Blanquer, Valentín Cabañas Perianes y Rafael Duarte Palomino",
        "materia": "27. Hematología",
        "origenId": "01MXVTLIKTVN4YPT6NOBHZENURHKKUC3BD",
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "PREGRADO DE HEMATOLOGIA <span class=\"libro-edicion\">5ed</span>",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBTq3mHz81wT5I2kTqVQWwjAciBKuaQ82IRLIoRJaTNOJg",
        "carrera": "Bioquímica"
    },
    {
        "estadoPortada": "pendiente",
        "nombreArchivo": "Toxicología Fundamental. Manuel Repetto Jiménez 5ºed..pdf",
        "titulo": "Toxicología Fundamental <span class=\"libro-edicion\">5ed</span>",
        "autor": "Manuel Repetto Jiménez y Guillermo Repetto Kuhn",
        "origenId": "01MXVTLIKUVYJTURMAOZF2XUNPSII3G4H7",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "origenImportacion": "Bioquimica OneDrive",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "materia": "19. Toxicología",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBUrhM6RYB2S6vRr5IRs3D_AeIREUMosUtHR1IrvJxZqi8"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "nombreArchivo": "Anatomia, Fisiología y Semiología Básica.pdf",
        "origenId": "01MXVTLIKVNZTOF56XIBGKL3UN6XK2657T",
        "estadoPortada": "pendiente",
        "titulo": "Anatomia, Fisiología y Semiología Básica",
        "autor": "S/A",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBVbmbi99dATKXujfXVr3fzAd0LgW4irknYiNE-IZOx4UE",
        "materia": "8. Fisiología Humana",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBVqO0qoqsmT6Df-8lFHhR4AVQ0PTPsNcEFp7lFsiE_X2A",
        "origenId": "01MXVTLIKVVDWSVIVLEZH2BX73ZFCR4FDY",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Silvia Schujer",
        "nombreArchivo": "Cuento. cuando se van al jardín. Silvia Schujer.pdf",
        "materia": "7. Comunicación Oral y Escrita en Castellano",
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "cuando se van al jardín.",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente"
    },
    {
        "titulo": "Microbiologia Clinica y Enfermedades Infecciosas",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBWCBxfPI32QK11I3r0TqzVAVDLkSamJH61VOeFIZMWaWs",
        "origenId": "01MXVTLIKWBAOF6PEN6ZAK25JDPL2E5LGV",
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "autor": "W. John Spicer",
        "nombreArchivo": "Microbiologia Clinica y Enfermedades Infecciosas.pdf",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "materia": "22. Microbiología General",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "nombreArchivo": "Las bases farmacologicas de la terapeuticaGyG 11 ed.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente",
        "titulo": "Las bases farmacologicas de la terapeutica <span class=\"libro-edicion\">11° Edición</span>",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBWzXQ5C36HTpCCz3Zad2D0AekPpUJwppLKLiz4K7jzt3Q",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "materia": "24. Farmacología",
        "carrera": "Bioquímica",
        "origenId": "01MXVTLIKWZV2DSC36Q5HJBAWPOZNHOYHU",
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "Goodman & Gilman"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "14. Citología Clínica",
        "carrera": "Bioquímica",
        "autor": "Fernando Muñoz",
        "estadoPortada": "pendiente",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBXKL2_mywISIYmhLgE-ZeHAfeWvMJDx4uRf2d0s26pEAg",
        "origenId": "01MXVTLIKXFC637GZMBBEIMJUEXACPTF4H",
        "titulo": "Citología Ginecológica.",
        "nombreArchivo": "Citología Ginecológica. Fernando Muñoz.pdf",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        }
    },
    {
        "autor": "Cesar Urquizo y Ricardo Vega",
        "materia": "4. Química General",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBXn47IvwpASI9cIcIyppRUAaj19gggnGHM2lyNg8n38Us",
        "nombreArchivo": "Química- Densidad, presión, temperatura - Estados condensados.pdf",
        "carrera": "Bioquímica",
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLIKXT6HMRPYKIBEI6XBBYIZKNFCU",
        "titulo": "Química: Densidad, presión, temperatura - Estados condensados"
    },
    {
        "autor": "Mauricio Hernández Ávila,  Eduardo Lezcano Ponce y Carlos Oropeza Abúndez",
        "origenId": "01MXVTLIKY666ZL36TDFHJEUV6JISI3JEJ",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBY972V79MZTpJSvkokjaSJAZwnge02bhZf1T8Ts9SXsAM",
        "titulo": "Salud Pública. Teoría y práctica",
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "nombreArchivo": "Salud Publica. Teoria y practica Hernandez Avila.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "estadoPortada": "pendiente",
        "materia": "30. Salud Pública y Epidemiología"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "cuentos_voz_alta.pdf",
        "autor": "Antonio Pons",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLIKYPRPDTSQHLFDYV7C7RU3ZFQBR",
        "estadoPortada": "pendiente",
        "materia": "7. Comunicación Oral y Escrita en Castellano",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBYfF45ygdZR4r8X403ksAxAX2ai5gWOwVWn0h_DjVPMkA",
        "titulo": "CINCO CUENTOS PARA LEER  EN VOZ ALTA",
        "carrera": "Bioquímica"
    },
    {
        "origenId": "01MXVTLIKYTCRA74YRTVE3IVDGV7WIAC2P",
        "titulo": "Epidemiología Clínica <span class=\"libro-edicion\">5° Edición</span>",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "autor": "Robert Fletcher et al",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBYmKIP8xGdSbRUZq_sgAtPAaYKi_Ze_HFLOoIjdutGkg4",
        "carrera": "Bioquímica",
        "materia": "30. Salud Pública y Epidemiología",
        "nombreArchivo": "Epidemiología Clínica 5°ed.pdf",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQB65YH2XYaDSK0ndJBSrmGvAdkkQrBfpaRilXp5nOJRi28",
        "nombreArchivo": "Fisiologia Clinica del Ejercicio CHICHARRO.MOJARES.pdf",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "origenId": "01MXVTLIL24WA7MXMGQNEK2J3USBJK4YNP",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente",
        "titulo": "Fisiologia Clinica del Ejercicio",
        "materia": "11. Fisiopatología Humana",
        "autor": "CHICHARRO.MOJARES",
        "carrera": "Bioquímica",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "materia": "7. Comunicación Oral y Escrita en Castellano",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQB68xzUv8YQTo821VXMRktLAcU6Lpa690f0EYzyfmw0hmg",
        "carrera": "Bioquímica",
        "origenImportacion": "Bioquimica OneDrive",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "origenId": "01MXVTLIL26MONJP6GCBHI6NWVKXGEMS2L",
        "titulo": "gramatica de la lengua castellana <span class=\"libro-edicion\">Edicion reformada</span>",
        "nombreArchivo": "gramatica de la lengua castellana.pdf",
        "autor": "RAE",
        "estadoPortada": "pendiente"
    },
    {
        "nombreArchivo": "MURRAY Microbiología médica 8a Ed.pdf",
        "carrera": "Bioquímica",
        "origenId": "01MXVTLIL2AEBVPED5IVG2VPL4RWC2O7EN",
        "titulo": "Microbiología médica <span class=\"libro-edicion\">8° Edición</span>",
        "autor": "MURRAY",
        "materia": "22. Microbiología General",
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQB6AQNXkH1FTaq9fI2Fp3yNAQZn6OzT9b5vnY-lKaGCUtw"
    },
    {
        "titulo": "Patologia Clinica",
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLIL2SOO6ICVO5BB3FDLE7WHDATGI",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "carrera": "Bioquímica",
        "nombreArchivo": "Patologia Clinica stevens.pdf",
        "estadoPortada": "pendiente",
        "autor": "stevens",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQB6k53kCq7oQ7KNZP2OMEzIAWE9ObS_T1DvmywT7LiDoHE",
        "materia": "11. Fisiopatología Humana"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "carrera": "Bioquímica",
        "origenId": "01MXVTLIL32DTPE3M2WNHJO6BKKAD46IK5",
        "autor": "Brenda Aquino Palacios-Diana Laura Ferrer Manuel",
        "titulo": "Fisiopatología Hepatopatias",
        "materia": "11. Fisiopatología Humana",
        "origenImportacion": "Bioquimica OneDrive",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente",
        "nombreArchivo": "Fisiopatología Hepatopatias.pdf",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQB70ObybZqzTpd4KlAHzyFdAdWYgctNaXOo2kcEngzhRdU"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQB7mjTOq6gJSr7kNS2SIXgMAddf-1A-fPKalXG7YmZFLbY",
        "autor": "Botero",
        "titulo": "Parasitosis Humanas",
        "origenId": "01MXVTLIL3TI2M5K5IBFFL5ZBVFWJCC6AM",
        "nombreArchivo": "Parasitosis Humanas de Botero.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "materia": "32. Parasitología",
        "estadoPortada": "pendiente"
    },
    {
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "5. Bioestadística",
        "carrera": "Bioquímica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "titulo": "Bioestadistica <span class=\"libro-edicion\">6° Edición</span>",
        "nombreArchivo": "Bioestadistica Glantz.pdf",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQB8qked5SWeRLGhICLqhnLkAUNje2R-7eRhhRwR2c8xotk",
        "origenId": "01MXVTLIL4VJDZ3ZJFTZCLDIJAELVIM4XE",
        "estadoPortada": "pendiente",
        "autor": "Glantz"
    },
    {
        "titulo": "Flashcards de Anatomia <span class=\"libro-edicion\">4a Edicion</span>",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQB9UGl_KhdFTrGfXFoov_mMAVZdJRw5q1BuQWzyYN8YEhM",
        "origenImportacion": "Bioquimica OneDrive",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "carrera": "Bioquímica",
        "autor": "Netter",
        "nombreArchivo": "Netter Flashcards de Anatomia 4a Edicion.pdf",
        "estadoPortada": "pendiente",
        "origenId": "01MXVTLIL5KBUX6KQXIVHLDH24LIUL76MM",
        "materia": "1. Anatomia Humana",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "Kumar y Clark",
        "carrera": "Bioquímica",
        "materia": "28. Clínica",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "titulo": "Medicina Clínica Esencial <span class=\"libro-edicion\">7° edición</span>",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQB-rR3Ot-86TpVRQ6BR9p0UAajpmo3rc_PKyioL2IipifE",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "Medicina Clínica Esencial 7°ed.pdf",
        "estadoPortada": "pendiente",
        "origenId": "01MXVTLIL6VUO45N7PHJHJKUKDUBI7NHIU"
    },
    {
        "estadoPortada": "pendiente",
        "origenId": "01MXVTLIL7R3EXQ6HEW5FJG3DNHERHTQZ5",
        "materia": "22. Microbiología General",
        "carrera": "Bioquímica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "Manual de Microbiologa y Parasitologia Canese.pdf",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "titulo": "Manual de Microbiologa y Parasitologia Canese <span class=\"libro-edicion\">7° Edición</span>",
        "autor": "Arquimedes - Andrés",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQB_jsl4eOS3SpNsbTkiecM9AdUQZubLZsTA5aMBxOkUbUc",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "carrera": "Bioquímica",
        "titulo": "Microbiologia Medica <span class=\"libro-edicion\">25° Edición</span>",
        "materia": "22. Microbiología General",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "autor": "Jawetz",
        "origenImportacion": "Bioquimica OneDrive",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQB_n-PbcAttRpTr82p0-PcNAWMDD8i74q1D7Hho4jRHbbk",
        "nombreArchivo": "Microbiologia Medica Jawetz 25a Edicion.pdf",
        "origenId": "01MXVTLIL7T7R5W4ALNVDJJ27TNJ2PR5YN",
        "estadoPortada": "pendiente"
    },
    {
        "carrera": "Bioquímica",
        "titulo": "el príncipe feliz y otros cuentos",
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "7. Comunicación Oral y Escrita en Castellano",
        "estadoPortada": "pendiente",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "autor": "Osar Wilde",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBg4HQ30H_lSaqYDjhYNvKeAfBG4SMoYy5AibDy8BXOb5Y",
        "origenId": "01MXVTLILA4B2DPUD74VE2VGAOHBMDN4U6",
        "nombreArchivo": "el_principe_feliz_y_otros_cuentos.pdf"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "estadoPortada": "pendiente",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBgYAduZcouRp1RIdD-H7FiAQL1GQmtoVUjFIEhjzxsECc",
        "titulo": "Quimica 3",
        "nombreArchivo": "Folleto cepre uni Quimica 3.pdf",
        "carrera": "Bioquímica",
        "autor": "Prof. Joel K. Rojas Mendoza",
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLILAMADW4ZOKFZDJ2UJB2D7B7MLC",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "materia": "4. Química General"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBgsXWZVGxMTKuDPQ6uzuGCARuWdoOij1Kg-HeaAQAA_l8",
        "titulo": "EL PODER DEL LENGUAJE <span class=\"libro-edicion\">tomo 8</span>",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "origenImportacion": "Bioquimica OneDrive",
        "nombreArchivo": "EL PODER DEL LENGUAJE.pdf",
        "carrera": "Bioquímica",
        "autor": "Autor Institucional",
        "origenId": "01MXVTLILAWF2ZSVDMJRGKXAZ5B2XM5YMC",
        "materia": "7. Comunicación Oral y Escrita en Castellano",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente"
    },
    {
        "carrera": "Bioquímica",
        "fechaImportacion": {
            "seconds": 1792413003,
            "nanoseconds": 226000000
        },
        "autor": "Miguel Zavala Vargas",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBgvte9UUcYRLK1Stw0BGWtAf707BAogMwwOGVqn11u0UY",
        "materia": "39. Quimica Organica",
        "titulo": "Química Orgánica I: Carbono, Petróleo e Hidrocarburos",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "Química Orgánica I-Carbono,Petróleo e Hidrocarburos.pdf",
        "origenId": "01MXVTLILAX3L32UKHDBCLFNKK3Q2AIZNN",
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "estadoPortada": "pendiente",
        "carrera": "Bioquímica",
        "origenId": "01MXVTLILBHHW5H73A7NELXRPLCLX2BPRD",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "titulo": "Anatomia con orientacion clinica <span class=\"libro-edicion\">7° edición</span>",
        "materia": "28. Clínica",
        "autor": "Moore",
        "nombreArchivo": "Moore Anatomia con orientacion clinica 7a edicion.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenImportacion": "Bioquimica OneDrive",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBhOe3T_2D7SLvF6xLvoL4jAdZDKiZnWBztWaDsX0y4gWU"
    },
    {
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "CENTRO PREUNIVERSITARIO",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBhv6lBNq7zRrRBHNHxSux0AVsxbxO4LYDSR6sGdXATRyQ",
        "origenId": "01MXVTLILBX6UUCNVO6NDLIQI42HYUV3DU",
        "titulo": "QUÍMICA: MANUAL DE PRACTICAS Y EJERCICIOS",
        "nombreArchivo": "Química Manual de Practicas y Ejercicios.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "materia": "4. Química General",
        "estadoPortada": "pendiente",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        }
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBi8oRoPPTfT6icteshRFZmAUmtDYVobjN27HYLo5OQeHI",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Julio Puente",
        "origenId": "01MXVTLILC6KCGQPHU35H2RHFV5MQUIVTG",
        "nombreArchivo": "Fisica-2-Julio Puente.pdf",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "materia": "17. Fisicoquímica",
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Fisica 2",
        "carrera": "Bioquímica"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "nombreArchivo": "Química 2020-2.pdf",
        "autor": "CENTRO PREUNIVERSITARIO - UNALM",
        "estadoPortada": "pendiente",
        "titulo": "Guía de Ejercicios Química",
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLILC7M2NR4W7NRBLSL3W562PCKNS",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "materia": "4. Química General",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBi-zTY8t9sQrkvdu-08SmyAZ8rMiaCRHwi3PZaXEpWDo4"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenImportacion": "Bioquimica OneDrive",
        "nombreArchivo": "Química-Tabla periódica - Propiedades.pdf",
        "titulo": "Química-Tabla periódica - Propiedades",
        "materia": "4. Química General",
        "carrera": "Bioquímica",
        "origenId": "01MXVTLILDQCJ4WG3UTVAIXRKJTCKSUL3B",
        "autor": "Ricardo Vega",
        "estadoPortada": "pendiente",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBjgJPLG3SdQIvFSZiVKi9hAc-hVqxzO7sUbyU935RmCT8"
    },
    {
        "nombreArchivo": "manual-de-practicas-de-laboratorio-quimica-inorganica-jaime-alfredo-castillo-y-rosymar-illescas-rivero.pdf",
        "carrera": "Bioquímica",
        "origenId": "01MXVTLILDYVGM6MPQUFFK4IBBLWENIU5P",
        "titulo": "manual de practicas de laboratorio quimica inorganica",
        "materia": "37. Quimica Inorganica",
        "autor": "Jaime Alfredo Castillo y Rosymar Illescas Rivero",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenImportacion": "Bioquimica OneDrive",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBjxUzPMfChSq4gIV2I1FOvAa9LgoH3z4s4UjUMLMP0xtY"
    },
    {
        "materia": "32. Parasitología",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBk0vMQ4t-pTamGMqoecv8YAckUSBkbF8WGpSL6-el_D98",
        "autor": "S/A",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "nombreArchivo": "Atlas Tematico de Parasitologia.pdf",
        "origenId": "01MXVTLILE2LZRBYW7VFG2TBRSVIPHF7YY",
        "titulo": "Atlas Tematico de Parasitologia",
        "estadoPortada": "pendiente"
    },
    {
        "origenImportacion": "Bioquimica OneDrive",
        "estadoPortada": "pendiente",
        "titulo": "Solucionario Química UNMSM <span class=\"libro-edicion\">5</span>",
        "nombreArchivo": "QUÍMICA (5).pdf",
        "autor": "Depósito Legal de la Biblioteca Nacional del Perú",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBkP0IjWphiQ4y6zMISNUbzAXZTMEiEqtboulmll8SC6-o",
        "carrera": "Bioquímica",
        "origenId": "01MXVTLILEH5BCGWUYMJBYZOWMYIJDKRXT",
        "materia": "4. Química General",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        }
    },
    {
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "estadoPortada": "pendiente",
        "origenId": "01MXVTLILEWDN73ZNPWZFZB7PVSADGZZWL",
        "materia": "20. Bromatología y Bioquímica Nutricional",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Francisco Grande Covián",
        "carrera": "Bioquímica",
        "nombreArchivo": "Bioquimica de la nutrición.pdf",
        "titulo": "Bioquimica de la nutrición",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBksNv95a-2S5D99ZAGbObLAY15IaUq3tKvR51cQgZSzWw",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente",
        "titulo": "Bioquimica de Laguna y Pina <span class=\"libro-edicion\">8° Edición</span>",
        "nombreArchivo": "Bioquimica_de_Laguna_y_Pina_octava_edici.pdf",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBlGOLp3ujBTaFHJL_DxuamAWr7nG8JPCw3Gu4iKu5qn0E",
        "materia": "18. Bioquímica",
        "origenId": "01MXVTLILFDDROTXXIYFG2CRZEX7B4NZVG",
        "autor": "Martínez Montes, F., Pardo Vázquez, J. P., & Riveros Rosas, H.",
        "origenImportacion": "Bioquimica OneDrive",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "estadoPortada": "pendiente",
        "materia": "3. Metodología de Estudio",
        "origenId": "01MXVTLILFIVMQXNWVP5AJHGU67PAMWXHW",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "nombreArchivo": "Metodología y Técnicas Analíticas para la Investigación de Accidentes de Trabajo.pdf",
        "titulo": "Metodología y Técnicas Analíticas para la Investigación de Accidentes de Trabajo",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBlRVkLttV_QJOanvvAy1z2AWH5bpQA-Vsp2H5CJDPBHCg",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "Carlos Arévalo Sarrate"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "titulo": "Texto de Histología Atlas a color <span class=\"libro-edicion\">4ed</span>",
        "origenId": "01MXVTLILFUJOTUKD6PZGLQDDMNHG66RCU",
        "origenImportacion": "Bioquimica OneDrive",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBlol06KH5-TLgMbGnN70RUAZQRJA4FICFH16P49PQmgb0",
        "materia": "9. Histología Humana",
        "estadoPortada": "pendiente",
        "nombreArchivo": "Texto de Histoligia Atlas a Color 4ed PT ES.pdf",
        "carrera": "Bioquímica",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "autor": "LESLlE P. GARTNER"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenId": "01MXVTLILG725N2MZSFRBKWX7TGJ32IUVR",
        "autor": "Moraleda Jimenez",
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "27. Hematología",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBm_rrdMzIsQqtf8zJ3pFKxAZmYaOEvSqhq5V5k_GKittw",
        "nombreArchivo": "Libro-HEMATOLOGIA-Pregrado.pdf",
        "estadoPortada": "pendiente",
        "titulo": "Pregrado de HEMATOLOGIA <span class=\"libro-edicion\">4° Edición</span>",
        "carrera": "Bioquímica"
    },
    {
        "carrera": "Bioquímica",
        "autor": "S/A",
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Introducción a la Anatomía y Fisiología Humana",
        "materia": "8. Fisiología Humana",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "Introducción a la Anatomía y Fisiología Humana.pdf",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBnW52qqasbSKZ2i-ZepobeASgO9GCj6uiIGIGGTAs4zQw",
        "estadoPortada": "pendiente",
        "origenId": "01MXVTLILHLOO2VKNLDNEKM5UL4ZPKNBW6"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "materia": "25. Inmunología",
        "origenId": "01MXVTLILHPR6IDPJB5FGYRIJXCGVUTCYQ",
        "carrera": "Bioquímica",
        "autor": "Sara Calleja Antolín",
        "origenImportacion": "Bioquimica OneDrive",
        "nombreArchivo": "Inmunologia.pdf",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBnfHyBvSHpTYihNxGrSYsQAcGcihJDPE0vFoA2_Fki4jM",
        "estadoPortada": "pendiente",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "titulo": "Inmunologia"
    },
    {
        "origenId": "01MXVTLILHZLJWOIYVGNEILWNSIQMFMPCT",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBnytNnIxUzSIXZskQYVjxTATVE0zr2QLDmMcEnweLNAS0",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente",
        "autor": "JOSÉ BELLO GUTIERREZ",
        "materia": "20. Bromatología y Bioquímica Nutricional",
        "titulo": "Ciencia Bromatologica",
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "nombreArchivo": "Ciencia Bromatologica.pdf"
    },
    {
        "origenId": "01MXVTLILK6HTOVAKQ4BHZQCILLRJZXK5L",
        "materia": "28. Clínica",
        "nombreArchivo": "Diagnostico clinico y tratamiento.pdf",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "estadoPortada": "pendiente",
        "carrera": "Bioquímica",
        "origenImportacion": "Bioquimica OneDrive",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBq8ebqgVDgT5gJC1xTm6urAdADuXoEvBjs9xFdakCwhwk",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "MAXINE A. PAPADAKIS y  STEPHEN J. McPHEE",
        "titulo": "Diagnostico clinico y tratamiento <span class=\"libro-edicion\">2017</span>"
    },
    {
        "titulo": "SNELL NEUROANATOMÍA CLINICA <span class=\"libro-edicion\">8ed</span>",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "estadoPortada": "pendiente",
        "nombreArchivo": "Snell Neuroanatomia Clinica 8a Edicion.pdf",
        "origenId": "01MXVTLILKBAL7EYBHE5GYTFTY3HHVUBZC",
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBqCBfyYCcnTYmWeNnPWgciARY1VgE34-SWvREr5DWlxKM",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Ryan Splittgerber",
        "materia": "1. Anatomia Humana"
    },
    {
        "origenId": "01MXVTLILKETBJVX2EZVBZ7FQBVTRCA7OR",
        "carrera": "Bioquímica",
        "autor": "Frank H. Netter, MD",
        "titulo": "Atlas de Anatomía Humana <span class=\"libro-edicion\">4° ED</span>",
        "materia": "1. Anatomia Humana",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "Atlas de Anatomía Humana.pdf",
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBqJMKa30TNQ5-WAaziIH3RAVtq7N9ExCVFO3t9Hg4ipho"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenImportacion": "Bioquimica OneDrive",
        "nombreArchivo": "Hipertexto Santillana 1.pdf",
        "titulo": "Hipertexto Santillana 1",
        "materia": "17. Fisicoquímica",
        "carrera": "Bioquímica",
        "origenId": "01MXVTLILNTKTPL7GHNNGZ4EP4UP4CCLH6",
        "autor": "Mauricio Bautista Ballén & Francia Leonora Salazar Suáre",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBtmqb1_MdrTZ4R_KP4ISz-ARlJevnkoc4z7qSeIjjvKV0",
        "estadoPortada": "pendiente"
    },
    {
        "titulo": "Cuestiones y ejercicios de quimica organica <span class=\"libro-edicion\">2° Edición</span>",
        "fechaImportacion": {
            "seconds": 1792413003,
            "nanoseconds": 226000000
        },
        "estadoPortada": "pendiente",
        "origenId": "01MXVTLILON3Z3K6SKNZB34GOOTNRUW2QL",
        "nombreArchivo": "Cuestiones y ejercicios de quimica organica.pdf",
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBubvO1ekpuQ74ZzptjS2oLAVbeKcRxoeXeLLsdXy--Yw8",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Emilio Quiñoá Cabana y Ricardo Riguera Vega",
        "materia": "39. Quimica Organica"
    },
    {
        "nombreArchivo": "Química - Raymond Chang & Keeneth A. Goldsby - 11ed.pdf",
        "carrera": "Bioquímica",
        "origenId": "01MXVTLILOZK7VOJUNVRE2Q4PRW6ASVVJY",
        "titulo": "Química <span class=\"libro-edicion\">11° edición</span>",
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "4. Química General",
        "estadoPortada": "pendiente",
        "autor": "Raymond Chang & Keeneth A. Goldsby",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBuyr9XJo2sSahx8beBKtU4AYFVX68ooSi7PDD656Lj-Qk",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        }
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBvIUuNU6WZQq-sGp2_nUK7AcAxefl7Xg_bVm96IyQwwkg",
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLILPEFFY2U5FTFBK7LA2TW7Z2QV3",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "Rhoton Anatomia Craneal y Abordajes Quirurgicos.pdf",
        "materia": "1. Anatomia Humana",
        "titulo": "Anatomia Craneal y Abordajes Quirurgicos",
        "autor": "Albert L. Rhoton",
        "carrera": "Bioquímica",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "estadoPortada": "pendiente"
    },
    {
        "titulo": "Cinética y Equilibrio Químico",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBvL8ROKSAsRqJfBN5doEnnAaplo75ECL4BXrIhyzMi21c",
        "origenId": "01MXVTLILPF7CE4KJAFRDKEXYE3ZO2ASPH",
        "carrera": "Bioquímica",
        "nombreArchivo": "Cinética y Equilibrio Químico.pdf",
        "autor": "Cesar Urquizo P",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "origenImportacion": "Bioquimica OneDrive",
        "estadoPortada": "pendiente",
        "materia": "4. Química General",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "estadoPortada": "pendiente",
        "materia": "21. Genética",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "carrera": "Bioquímica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "Genetica Medica 4a Edicion.pdf",
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLILQEUTKNULVAZEYO65IRY3GSSKG",
        "titulo": "Genetica Medica <span class=\"libro-edicion\">4° Edición</span>",
        "autor": "Jorde - Carey - Bamshad",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBwJSam0XUGSYd7qI42aUlGARmG2dEP-JBpnTBtz3Gu1yI"
    },
    {
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente",
        "titulo": "Química Analítica <span class=\"libro-edicion\">Tomo IV</span>",
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "36. Quimica Analítica",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "nombreArchivo": "Quimica Analitica T 4.PDF",
        "origenId": "01MXVTLILR47QUOCFDVNEKCYUGYSIL2AIQ",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "M. Machtinger y R. Rosset",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBx5-FHCKOrSKFihsSQvQEQAVtK9bWwCtK2pM1YMcVRP6Y"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQByoycWx74VSa_fdyWRTY_nAc2rUXeuDLmT48PiAvDfMno",
        "autor": "CARMEN BEATRIZ NARANJO ARISTIZÁBAL",
        "titulo": "Atlas de Hematologia Celulas Sanguineas <span class=\"libro-edicion\">2° ED</span>",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "origenId": "01MXVTLILSUMTRNR56CVE27X3XEWIU3D7H",
        "origenImportacion": "Bioquimica OneDrive",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "nombreArchivo": "Atlas de Hematologia Celulas Sanguineas.pdf",
        "materia": "27. Hematología",
        "estadoPortada": "pendiente"
    },
    {
        "estadoPortada": "pendiente",
        "autor": "Mérida de la Torre - a Moreno Campoy",
        "origenImportacion": "Bioquimica OneDrive",
        "nombreArchivo": "Manual para Tecnico Superior de Laboratorio Clinico y Biomedico.pdf",
        "titulo": "Manual para Tecnico Superior de Laboratorio Clinico y Biomedico",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "materia": "2. Biología General",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBzDHK9CWt8SpplTP63KbzFARquVKNr26Fbj2UkeApJG30",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "origenId": "01MXVTLILTBRZL2CLLPRFJUZKM723STPGF"
    },
    {
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente",
        "origenId": "01MXVTLILTHW6I5RU4RNELWZ5KK7ZPZMKK",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "titulo": "La teoria Fundamentada: Una Metodología Cualitativa <span class=\"libro-edicion\">1° Edición 2016</span>",
        "nombreArchivo": "La teoria Fundamentada. Una Metodología Cualitativa.pdf",
        "materia": "3. Metodología de Estudio",
        "autor": "Silvia Bénard Calva",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBzPbyOxpyLSLtnqlfy_LFKAS_kkGqScqTCZb3IC8wQqP8",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "LATARJET",
        "materia": "1. Anatomia Humana",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBzfHXvKxcpRaC4L1ex1ndaAQe_fVeMTZtJ7mfKEi5Ymhg",
        "carrera": "Bioquímica",
        "nombreArchivo": "LATARJET Anatomía Humana 4a Ed - Tomo 2.pdf",
        "origenId": "01MXVTLILTPR266KYXFFC2BOBPK6Y5M522",
        "estadoPortada": "pendiente",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "titulo": "Anatomía Humana <span class=\"libro-edicion\">4° Edición - Tomo 2</span>"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQBzz0xCAjhkTq4-ZTcZkBaRAYvMWavZ_kOcy0FFQ5T63jo",
        "origenImportacion": "Bioquimica OneDrive",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "Farmacologia Basica y Clinica - Katzung - 13va Edición.pdf",
        "autor": "Katzung",
        "titulo": "Farmacologia Basica y Clinica <span class=\"libro-edicion\">13° Edición</span>",
        "materia": "24. Farmacología",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "origenId": "01MXVTLILTZ5GEEARYMRHK4PTFG4MZAFUR",
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente"
    },
    {
        "nombreArchivo": "Microbiologia Medica Murray 9a Edicion.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQB0f-ON66tQRL9CVET9Qx8UATUrTKwmjXg80oPCh3Db6AA",
        "autor": "Murray et al",
        "origenImportacion": "Bioquimica OneDrive",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "estadoPortada": "pendiente",
        "materia": "22. Microbiología General",
        "origenId": "01MXVTLILUP7RY325LKBCL6QSUIT6UGHYU",
        "titulo": "Microbiologia Medica <span class=\"libro-edicion\">9° Edicion</span>",
        "carrera": "Bioquímica"
    },
    {
        "estadoPortada": "pendiente",
        "materia": "4. Química General",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "nombreArchivo": "Reacciones Químicas - Estequiometría.pdf",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "titulo": "Reacciones Químicas - Estequiometría",
        "origenId": "01MXVTLILUW6MP3ISYUFCYBFBH3RBR3DNQ",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQB0t5j9olihRYCUJ9xDHY2wAYOeXBnasHu8CG9rb8y7VoA",
        "autor": "Cesar Urquizo y Ricardo Vega"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "origenId": "01MXVTLILWFCVTKA253FBKVV6LP2Q4XPGP",
        "nombreArchivo": "Folleto cepre uni Quimica 6.pdf",
        "carrera": "Bioquímica",
        "materia": "4. Química General",
        "autor": "Prof. Joel K. Rojas Mendoza",
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Quimica 6",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQB2KKs1A13ZQqrXy36hy7zPAWnMtoGTKPrey-d4wVp7OQ8"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQB2UUWjkZTLQbjwHP6a_2NFAQ9vlJ7ol0LM1istU-BMuCQ",
        "materia": "23. Biotecnología",
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "nombreArchivo": "biotecnologia aplicada.pdf",
        "carrera": "Bioquímica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "origenId": "01MXVTLILWKFC2HEMUZNA3R4A472NP6Y2F",
        "autor": "DR. JUAN BUEREN Y DR. JOSÉ LUIS MOTELLÓN",
        "titulo": "biotecnologia aplicada <span class=\"libro-edicion\">6° Edición</span>"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "estadoPortada": "pendiente",
        "origenId": "01MXVTLILYJY7QDR7CRVBKCCZAFJRQSVZI",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "bioestadistica. introducción a la estadistica en ciencias de la salud.pdf",
        "titulo": "bioestadistica. introducción a la estadistica en ciencias de la salud",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQB4Tj8Bx-KNQqELICpjCVcoAVW8EhkEAJ9WFq7dBmb5fFQ",
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "5. Bioestadística",
        "carrera": "Bioquímica",
        "autor": "Del Rocío Paliz Sánchez, C., Mazacón Cervantes, C. J., Mazacón Gómez, M. N., y Suárez Guamá, P. J."
    },
    {
        "origenImportacion": "Bioquimica OneDrive",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQB4VJ6Q1qdSTrXIVxtHUvl2AbmRv-85Y-84zQ-djYQt1h8",
        "titulo": "Química Analítica <span class=\"libro-edicion\">Tomo 1</span>",
        "estadoPortada": "pendiente",
        "materia": "36. Quimica Analítica",
        "origenId": "01MXVTLILYKSPJBVVHKJHLLSCXDNDVF6LW",
        "carrera": "Bioquímica",
        "autor": "Gastón Charlot",
        "nombreArchivo": "Quimica Analitica T 1.PDF",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        }
    },
    {
        "origenImportacion": "Bioquimica OneDrive",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQB4ufi87LTETJfVmzA9GGL-AR3gXytw9NXcZi81-zHPwGM",
        "origenId": "01MXVTLILYXH4LZ3FUYRGJPVM3GA6RQYX6",
        "autor": "Miñón - Sánchez",
        "carrera": "Bioquímica",
        "materia": "21. Genética",
        "titulo": "Geriatria <span class=\"libro-edicion\">14° Edición</span>",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "Geriatria.pdf",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        }
    },
    {
        "origenImportacion": "Bioquimica OneDrive",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "materia": "35. Quimica Ambiental",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "titulo": "Química ambiental <span class=\"libro-edicion\">2ed</span>",
        "estadoPortada": "pendiente",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQB54RPw_47PRbvxhD1iWdhZAf6Gj0ZIEoYOjvpJxHhRSnk",
        "nombreArchivo": "Química ambiental. 2ºed. Colin Baird.pdf",
        "origenId": "01MXVTLILZ4EJ7B74OZ5C3X4MEHVRFTWCZ",
        "autor": "Colin Baird y Michael Cann"
    },
    {
        "origenImportacion": "Bioquimica OneDrive",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Leonardo Coronel",
        "materia": "4. Química General",
        "nombreArchivo": "Como Resolver Ejercicios de Quimica-Leonardo Coronel.pdf",
        "origenId": "01MXVTLIM2DEQJIZZS7VDYICMM4YPRF5T2",
        "estadoPortada": "pendiente",
        "titulo": "Como Resolver Ejercicios de Quimica <span class=\"libro-edicion\">7° Septimo</span>",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCaGSCUZzL9R4QJjOYfEvZ6AdyUT4xPO8d5pTVWDv_-sZU",
        "carrera": "Bioquímica"
    },
    {
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "Elia Roldán Reyes",
        "nombreArchivo": "Introducción a la toxicología. Elia Roldán.pdf",
        "carrera": "Bioquímica",
        "materia": "19. Toxicología",
        "estadoPortada": "pendiente",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCbiPHeubVYSLBKGF1ywWOWAVCitQsTHs0tyVdmoTtudc8",
        "titulo": "Introducción a la toxicología. Elia Roldán",
        "origenId": "01MXVTLIM3RDY55ONVLBELASQYLVZMCY4W",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        }
    },
    {
        "titulo": "Alhpeema vana Las palabras de los guaná <span class=\"libro-edicion\">Diccionario básico de la lengua guaná</span>",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "origenImportacion": "Bioquimica OneDrive",
        "estadoPortada": "pendiente",
        "carrera": "Bioquímica",
        "origenId": "01MXVTLIM4AJA6WE6QYBEZHEDNXAHNWTBR",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCcAkHrE9DASZOQbbgO20wxAWk3h6Usp5_mNjxPGn8butE",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "Alhpeema_vana.pdf",
        "autor": "S/A",
        "materia": "13. Comunicación Oral y Escrita Guaraní"
    },
    {
        "origenId": "01MXVTLIM4QNH62IEIRNEYSUZDTQDVDV4L",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "nombreArchivo": "Química de los Alimentos.pdf",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "titulo": "Química de los Alimentos <span class=\"libro-edicion\">4ed</span>",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCcg0_tIIiLSYlTI5wHUdeLAbP__A-nalP-K1oeaLLX7ak",
        "materia": "20. Bromatología y Bioquímica Nutricional",
        "carrera": "Bioquímica",
        "autor": "Salvador Badui Dergal",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCdmg3U5zW0SIHxotUoOX7vAf84kZk9LBRkgaarLhg1wXU",
        "autor": "Kunstmann",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "materia": "11. Fisiopatología Humana",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "origenImportacion": "Bioquimica OneDrive",
        "nombreArchivo": "Manual de Fisiopatologia Clinica Kunstmann 2a Edicion.pdf",
        "estadoPortada": "pendiente",
        "origenId": "01MXVTLIM5TIG5JZZVWREID4NC2UUDS7XP",
        "titulo": "Manual de Fisiopatologia Clinica <span class=\"libro-edicion\">2° Edición</span>",
        "carrera": "Bioquímica"
    },
    {
        "nombreArchivo": "Problemas de Quimica y como resolverlos.pdf",
        "titulo": "Problemas de Química y cómo resolverlos",
        "estadoPortada": "pendiente",
        "carrera": "Bioquímica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCeprxZB91-TZU_l2eoxXz0AZgfW17GFpCXeEXdjHG-8j8",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenImportacion": "Bioquimica OneDrive",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "origenId": "01MXVTLIM6U26FSB65PZGZKP4XM6UMK7HU",
        "autor": "Carlos Jara Benites y Rubén Cueva García",
        "materia": "4. Química General"
    },
    {
        "nombreArchivo": "Guyton & Hall Perguntas e Respostas em Fisiologia.pdf",
        "carrera": "Bioquímica",
        "autor": "Guyton & Hall",
        "materia": "8. Fisiología Humana",
        "titulo": "Perguntas e Respostas em Fisiologia <span class=\"libro-edicion\">2 Edición</span>",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLIMA4F4AKXDDZ5FIT7A7ZO7X3HTO",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCA4XgFXGPPSon8H8u_fZ5uAUAgLyWLaGrOo_STGJsJARo"
    },
    {
        "materia": "4. Química General",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCAH_PF3n9NR5vWPxzpsVXvAeLJZz84h5fFKFe2hWxDuM0",
        "carrera": "Bioquímica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Cesar Urquizo Palacios",
        "nombreArchivo": "Química Ácidos y Bases.pdf",
        "titulo": "Química: Ácidos y Bases",
        "origenId": "01MXVTLIMAD7Z4LXT7JVDZXVR7DTU3CVPP",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "origenImportacion": "Bioquimica OneDrive",
        "estadoPortada": "pendiente"
    },
    {
        "materia": "4. Química General",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCBatMjdjJuR6PhyNwAXNF_ARPywhIe0jYOXDX2aHK7i2M",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Ricardo Vega",
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente",
        "origenId": "01MXVTLIMBNLJSG5RSNZD2HYOI3QAFZUL7",
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Química - Estado gaseoso - Mezcla de gases",
        "nombreArchivo": "Química-Estado gaseoso - Mezcla de gases.pdf"
    },
    {
        "autor": "Enrique Mariscal Santingela et  al",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLIMBW4SCOPJ4ZNGLVCDAVMEMWWTI",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCBtyQnPTzLTLqIYKsIy1poAfget3Ja9c6LLZ8wHxsWNaQ",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "materia": "34. Fisica",
        "nombreArchivo": "Fisica Elemental y Aplicada Walter. Enrique Mariscal Santingela.pdf",
        "estadoPortada": "pendiente",
        "titulo": "Fisica Elemental y Aplicada Walter.",
        "carrera": "Bioquímica"
    },
    {
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "autor": "José Frutos García García y Miguel Ángel Royo",
        "origenImportacion": "Bioquimica OneDrive",
        "nombreArchivo": "Salud publica y epidemiologia.pdf",
        "materia": "30. Salud Pública y Epidemiología",
        "origenId": "01MXVTLIMBXLKPIL2CPNDYGK4S2JE6VZPU",
        "titulo": "Manuales de Dirección Médica y Gestión Clínica: Salud pública y epidemiología",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCButT0L0J7R4MrktJJ6uX0ATG78m4LBOkND057nxtzmeg",
        "carrera": "Bioquímica"
    },
    {
        "origenImportacion": "Bioquimica OneDrive",
        "nombreArchivo": "Química- Formulación y nomenclatura inorgánica.pdf",
        "origenId": "01MXVTLIMC5B2K54UQTZCYMGKLL5AG7HRG",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCC6HSu8pCeRYYZS19Ab54mASrDN_f_G-CQQ8a8o0eXyQQ",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente",
        "autor": "Cesar Urquizo y Ricardo Vega",
        "materia": "4. Química General",
        "titulo": "Química: Formulación y nomenclatura inorgánica",
        "carrera": "Bioquímica"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "La inmunologia en la salud y en la enfermedad.pdf",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "origenId": "01MXVTLIMC6K4SUMGXV5G26VXWFBH6U76W",
        "autor": "Salinas Carmonas",
        "estadoPortada": "pendiente",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCC8rkqMNevTa9W9ihP6n_WAXurCUdeTyV2eDX0n9TwiUM",
        "materia": "25. Inmunología",
        "titulo": "La inmunologia en la salud y en la enfermedad <span class=\"libro-edicion\">2° Edición</span>",
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica"
    },
    {
        "nombreArchivo": "Laboratorio_Clinico_indicaciones_e_interpretacion_de_resultados.pdf",
        "autor": "PAGANA - PAGANA",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCCzcAXC4YvSJQUoknzoi-gASsDz462KmmZOJcfhhpoeAY",
        "carrera": "Bioquímica",
        "materia": "18. Bioquímica",
        "estadoPortada": "pendiente",
        "titulo": "Laboratorio Clinico indicaciones e interpretacion de resultados",
        "origenImportacion": "Bioquimica OneDrive",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenId": "01MXVTLIMCZXABOC4GF5EJIFFCJHZ2EL5A"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "titulo": "Había una vez el atomo <span class=\"libro-edicion\">4 Edición</span>",
        "origenId": "01MXVTLIMD4BV4OPN3BVFJO3KD2WDYB6B7",
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Gabriel Gellon",
        "nombreArchivo": "Gellon.Habíaunavezelatomo.pdf",
        "materia": "17. Fisicoquímica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCD4GvHPbsNSpdtQ9WHgPg_AZycQpWwkRw-bIj8gKoGbOs"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCD90fDNWCbR7Op2UJdOwcPAXzwzbaGaT90-9iyf3gh0uQ",
        "autor": "Jorge Alvarado Lópe",
        "origenId": "01MXVTLIMD65D4GNLATND3HKOZIJOTWBYP",
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "2. Biología General",
        "estadoPortada": "pendiente",
        "nombreArchivo": "Biología 3° medio.pdf",
        "titulo": "Biología 3° medio",
        "carrera": "Bioquímica"
    },
    {
        "materia": "34. Fisica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCE_37I5gHRTYDQ87D2KXEjAfQ_S2UR5hjeEFsMVqKHyis",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "carrera": "Bioquímica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLIME757MRZQB2FGYBUHTWD3CS4JD",
        "nombreArchivo": "Conceptos y Magnitudes en Fisica. L.-Laroze.N.-Porras-y-G.-Fuster.pdf",
        "titulo": "Conceptos y Magnitudes en Fisica. <span class=\"libro-edicion\">v2012</span>",
        "autor": "L. Laroze,  N. Porras y G. Fuster",
        "estadoPortada": "pendiente"
    },
    {
        "carrera": "Bioquímica",
        "titulo": "MANUAL DE BROMATOLOGIA",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCEcDZFx5mwQbMnbISsi2XuAUlfPfV_ZqJzLX3dzI8mYhk",
        "origenId": "01MXVTLIMEOA3ELR4ZWBA3GJ3MQSWIWZPO",
        "materia": "20. Bromatología y Bioquímica Nutricional",
        "autor": "Autor Institucional",
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "nombreArchivo": "MANUAL-DE-BROMATOLOGIA-2017.pdf",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "carrera": "Bioquímica",
        "titulo": "Atlas de correlacion anatomo-radiologica: Anatomia cardiotoracica",
        "materia": "1. Anatomia Humana",
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCGB7Tp9b5sR70gJVCSREeNARvTyGZQE5XsBV6Cf_uEBPA",
        "origenId": "01MXVTLIMGA62OT5N6NRD32IBFKCJEIR4N",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "nombreArchivo": "Netter. Atlas de correlacion anatomo-radiologica Anatomia cardiotoracica.pdf",
        "autor": "Netter"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "Netter- Atlas de Anatomia Humana 5ed.pdf",
        "materia": "1. Anatomia Humana",
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente",
        "autor": "Frank H. Netter",
        "origenId": "01MXVTLIMH2CMI5JVXOZGZI2QGJIWFCUXI",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCH0JiOprd2TZRqBkosUVLoAaAEu_cDXzpCFDD5yF0hpYA",
        "titulo": "Atlas de Anatomía Humana <span class=\"libro-edicion\">5ed</span>",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Fisiologia Medica <span class=\"libro-edicion\">26° Edicion</span>",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCH9fMrvrn0TYJ0VtOFSVkVAXn2oIdKtDzH87AuXLV4wOA",
        "origenId": "01MXVTLIMH6XZSXPVZ6RGYE5CW2OCUSWIV",
        "autor": "Ganong",
        "carrera": "Bioquímica",
        "nombreArchivo": "Ganong Fisiologia Medica  26a Edicion.pdf",
        "estadoPortada": "pendiente",
        "materia": "8. Fisiología Humana",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "origenId": "01MXVTLIMIBN22BXKUZNEY355Q7OQJ5M5R",
        "titulo": "Farmacologia Ilustrada <span class=\"libro-edicion\">1° Edición</span>",
        "autor": "Netter",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCIC3Wg3VTLSY33sPugnrOxAWeUNDzDFyomHPy2VLJmiOo",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "materia": "24. Farmacología",
        "nombreArchivo": "Farmacologia Ilustrada - Netter - 1era Edición.pdf"
    },
    {
        "carrera": "Bioquímica",
        "titulo": "Fisiopatologia renal Fundamentos <span class=\"libro-edicion\">5a Edición. 2020</span>",
        "origenImportacion": "Bioquimica OneDrive",
        "nombreArchivo": "Fisiopatologia renal Fundamentos 5a Edicion 2020.pdf",
        "estadoPortada": "pendiente",
        "origenId": "01MXVTLIMICHIYAJOQ4JAJCOPDXQ4XSR5Y",
        "materia": "11. Fisiopatología Humana",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCIEdGAJdDiQJE547w5eUe4AeXUFBbR4WwfLhrQRKybp1E",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Rennke-Denker"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "materia": "19. Toxicología",
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLIMIHI7W6MFRCNBKUWKG5AKSLNEC",
        "autor": "RodrÌguez - Mayero",
        "carrera": "Bioquímica",
        "nombreArchivo": "Manual de toxicologia basica.pdf",
        "titulo": "Manual de toxicologia basica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCIOj9vMLETQqpZRugVJbSCAdSNF3KxkZFO4WBiwQcCDZg",
        "estadoPortada": "pendiente"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCJFgbmK4FgSpZ9St7x91GPAQx_5jTSRBLnUJnEhpvX80Q",
        "titulo": "Embriología Panorámica <span class=\"libro-edicion\">1° Edición</span>",
        "origenId": "01MXVTLIMJCYDOMK4BMBFJM7KK33Y7OUMP",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "carrera": "Bioquímica",
        "autor": "Villarreal",
        "nombreArchivo": "Embriología Panorámica Villarreal - 1° Edición.pdf",
        "origenImportacion": "Bioquimica OneDrive",
        "estadoPortada": "pendiente",
        "materia": "9. Histología Humana",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "carrera": "Bioquímica",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "origenId": "01MXVTLIMKH632HFFNENEZJP3JETWTLQ53",
        "materia": "12. Geometría Analítica y Cálculo",
        "titulo": "Nociones de Geometría Analítica y Álgebra Lineal",
        "autor": "Ana María Kozak",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente",
        "nombreArchivo": "Nociones de Geometría Analítica y Álgebra Lineal - Kozak Ana María.pdf",
        "origenImportacion": "Bioquimica OneDrive",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCKP7ejlK0jSZS_aSTtNcO7AVSDPNizpQ4uHooJfuKD5w0"
    },
    {
        "nombreArchivo": "Biotecnología-para-los-más-jóvenes.pdf",
        "origenImportacion": "Bioquimica OneDrive",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCLYQdK-ZprQJH50nhf9buRAXbJCituf9Irvv4-1_vDYP0",
        "autor": "Fabiana Malacarne",
        "estadoPortada": "pendiente",
        "titulo": "Biotecnología para los más jóvenes",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "origenId": "01MXVTLIMLMEDUV6M2NNAJD6OSPBP7LO4R",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "materia": "23. Biotecnología"
    },
    {
        "materia": "11. Fisiopatología Humana",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Gerard J. Tortora y Bryan Derrickson",
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "origenId": "01MXVTLIMNUN4RR7L4O5B3GC7G2SUBDS4W",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCNo3kY_Xx3Q7ML5tSoEcuWAbOtrLKghdC8G1IxMRPLVIQ",
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Principios de Anatomía y Fisiología",
        "nombreArchivo": "Principios de Anatomia y Fisiologia. Tortora-Derrickson.pdf"
    },
    {
        "nombreArchivo": "Toxicología Laboral - Vigilancia de los Trabajadores.pdf",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCODiVNO_p1RrLTYu-3uhUsAflN_-cyaZ3N5UaQwlrNM5Y",
        "autor": "Nelson F. Albiano",
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Toxicología Laboral: Criterios  para la Vigilancia  de los Trabajadores  Expuestos a Sustancias  Químicas Peligrosa",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "materia": "19. Toxicología",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "origenId": "01MXVTLIMOBYSU2O72OVDLFU3C5633UFJM"
    },
    {
        "autor": "David D. Celentano & Moyses Szklo",
        "estadoPortada": "pendiente",
        "carrera": "Bioquímica",
        "materia": "30. Salud Pública y Epidemiología",
        "nombreArchivo": "Gordis. Epidemiologia 6a Edicion.pdf",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCOoHGNvsU-Q7KWWZEjZcuFAQYn1AxIYv3AS2hRcd3giZY",
        "titulo": "Gordis. Epidemiologia 6a Edicion",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLIMOUBYY3PWFHZB3FFSZSERWLS4F",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Metodología de la investigación - Administración, economía, humanidades y ciencias sociales (Bernal, 3ra, 2010)",
        "origenId": "01MXVTLIMOVNGY2PBC65H2YFHM6TCCYKTJ",
        "autor": "S/A",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCOq02NPCL3T6wU7PTELCppAYifEA8M78kqnDJPTs3kRro",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "nombreArchivo": "Metodología de la investigación - Administración, economía, humanidades y ciencias sociales (Bernal, 3ra, 2010).pdf",
        "estadoPortada": "pendiente",
        "materia": "26. Metodología de la Investigación"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCOv0gRHIPvRr4o6y-6cEm3Aap74ZNKwYucRuup1gerOG8",
        "origenImportacion": "Bioquimica OneDrive",
        "estadoPortada": "pendiente",
        "autor": "aría José Rubio Gómez",
        "nombreArchivo": "Libro_de_metodologia_del_estudio.pdf",
        "titulo": "Metodologia del estudio",
        "origenId": "01MXVTLIMOX5EBCHED55DL4KHLF65HASNX",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "materia": "3. Metodología de Estudio",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        }
    },
    {
        "nombreArchivo": "Genetica Humana y Sociedad.pdf",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCOwL2jJpiYRoqtG6Mr8kVgAd_9qaUM8brjsf7QRzQVJaU",
        "origenId": "01MXVTLIMOYC62GJUYTBDIVLI3UMV7ERLA",
        "autor": "Yashon-Cummings",
        "titulo": "Genetica Humana y Sociedad",
        "estadoPortada": "pendiente",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "materia": "21. Genética",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCP8T5FIXQ0RoZDWWmKX3OUAZB-kkEOquL8vZL_w6DbcTI",
        "carrera": "Bioquímica",
        "titulo": "Guia de Manejo de las enfermedades falciformes",
        "materia": "27. Hematología",
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "AEHH",
        "origenId": "01MXVTLIMP6E7EKILUGRDIMQ2ZNGFF644U",
        "nombreArchivo": "Guia de Manejo de las enfermedades falciformes.pdf",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        }
    },
    {
        "autor": "Dr. José L.. Aguilar Olano",
        "titulo": "Bases de Inmunologia Clinica Aguilar <span class=\"libro-edicion\">2° ED</span>",
        "nombreArchivo": "Bases de Inmunologia Clinica Aguilar 2a Edicion.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "origenImportacion": "Bioquimica OneDrive",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "origenId": "01MXVTLIMPVN7HLPI42RCJA6O6MS54WLRL",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCPq351vRzURJB53mS7yy4rAaQmyhtMmnxA2vDv2isqmi8",
        "materia": "25. Inmunología",
        "estadoPortada": "pendiente"
    },
    {
        "autor": "Koolman Jan",
        "materia": "18. Bioquímica",
        "origenId": "01MXVTLIMQRYSHEJHSQVEKYSO6T4LKL5TQ",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "Koolman Jan - Bioquimica Humana - Texto Y Atlas.pdf",
        "estadoPortada": "pendiente",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCQjiRyJPKFSKxJ3p8WpfZwAff6hxLdx73-TuEndLjSWIQ",
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "titulo": "Bioquimica Humana: Texto Y Atlas"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "origenId": "01MXVTLIMQRYWUFSTWERAYNK74MNSRH7DS",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCQji1CynYkQYar_GNlE_xyATd7CuuUYlEU7ZH1jnEISmU",
        "nombreArchivo": "Salud Mental y Bioetica.pdf",
        "autor": "José Salazar Fraile, Juan Carlos Siurana Aparici, M. Barceló, M. Escrig y C. Vergara",
        "materia": "10. Ética y Bioética",
        "titulo": "SALUD MENTAL Y BIOÉTICA: Reflexiones desde una perspectiva multidisciplinar",
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "materia": "10. Ética y Bioética",
        "origenId": "01MXVTLIMRFOIS47ZBHBE2JG5PJ6YZBOFI",
        "carrera": "Bioquímica",
        "autor": "Jorge Larracilla Alegre, María del Carmen Cruz Toledano, María de la Luz Casas Martínez",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCRK5EufyE4SaSbr0-xkLioAUKUIv0Mfp1VnM089D5CpcU",
        "estadoPortada": "pendiente",
        "nombreArchivo": "Bioetica para estudiantes y profesionales de ciencias de la salud.pdf",
        "titulo": "Bioetica para estudiantes y profesionales de ciencias de la salud",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "nombreArchivo": "biotecnologia-fca-unlz.pdf",
        "materia": "23. Biotecnología",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "autor": "Lic. Ripa María Inés",
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLIMRSHUCDMTYH5FY2M4VOLJYZHS5",
        "titulo": "biotecnologia",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCRkeghsng_S40zlXLTjJ5dAZ9maPubyjC24tyeCx0qcPE"
    },
    {
        "origenId": "01MXVTLIMT7FSRIZL2EJFKVKL3VW2524TD",
        "materia": "39. Quimica Organica",
        "carrera": "Bioquímica",
        "origenImportacion": "Bioquimica OneDrive",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "titulo": "Química orgánica Teoría y Práctica",
        "estadoPortada": "pendiente",
        "nombreArchivo": "Química orgánica Teoría y Práctica.pdf",
        "fechaImportacion": {
            "seconds": 1792413003,
            "nanoseconds": 226000000
        },
        "autor": "Rolando Polo Collantes",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCT-WUUZXoiSqqpe6213XJjAZPIs6pbYj7Aww4rA6dquzc"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "titulo": "Química <span class=\"libro-edicion\">10ed</span>",
        "origenId": "01MXVTLIMTD7QQJYDND5D2MOCIR6NYYI5M",
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "KENNETH W. WHITTEN, RAYMOND E. DAVIS, M. LARRY PECK y GEORGE G. STANLEY",
        "nombreArchivo": "Quimica 10a Edicion.pdf",
        "materia": "4. Química General",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCTH-EE4G0fR6Y4SI-bjCOsAeKOdHz-nIcTpvxqUW1vDrM"
    },
    {
        "origenId": "01MXVTLIMTGSKJKZGCCFFZOEEDDCBFGEAO",
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "3. Metodología de Estudio",
        "carrera": "Bioquímica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "estadoPortada": "pendiente",
        "titulo": "Técnicas de estudio y estrategias para el aprendizaje",
        "autor": "Prof. GLORIA ESPINOZA y Prof. ÁNGELES CECILIA DEL CARMEN VALLEJOS ALEVRAS",
        "nombreArchivo": "Técnicas de estudio.pdf",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCTNJSVZMIRS5cQgxiCUxAOAQN7gyCRoe0nflYkfgsl_Rs"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "materia": "36. Quimica Analítica",
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenId": "01MXVTLIMTMOXMQIOW2ZH32FLPHQUWZT5O",
        "nombreArchivo": "Fundamentos de Quimica Analitivaa Skoog 9a Ed.pdf",
        "titulo": "Fundamentos de Quimica Analitica <span class=\"libro-edicion\">9° Edición</span>",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCTY67IIdbWT70VbzwpbM-uAYo2PFAB7xUYz8suwk3VTvM",
        "autor": "F. JAMES HOLLER | STANLEY R. CROUCH",
        "estadoPortada": "pendiente"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "materia": "9. Histología Humana",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "carrera": "Bioquímica",
        "origenId": "01MXVTLIMU4TQEUI6CHBGL2YVAWJRLH7AG",
        "autor": "Mariano Di Fiore.",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCU5OBKI8I4TL1ioLJis_wGAUVkZX6wm9IeVvTFmbVP9YQ",
        "estadoPortada": "pendiente",
        "titulo": "Atlas de Histología Normal. LEONES POR LA SALUD",
        "nombreArchivo": "Di Fiore. Atlas de Histología Normal. LEONES POR LA SALUD.pdf",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "carrera": "Bioquímica",
        "titulo": "Fisica I. <span class=\"libro-edicion\">3° Semestre</span>",
        "materia": "34. Fisica",
        "autor": "Ricardo Antonio Salazar Puente",
        "origenImportacion": "Bioquimica OneDrive",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCV8UeKCd3mQKRPq9PWa6FnAUnOy5jzITx1cn_S57Xn6n4",
        "nombreArchivo": "Fisica I. Ricardo Antonio Salazar Puente.pdf",
        "estadoPortada": "pendiente",
        "origenId": "01MXVTLIMV6FDYUCO54ZAKIT5L2PLGXILH",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        }
    },
    {
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "estadoPortada": "pendiente",
        "nombreArchivo": "Farmacologia Humana Jesus Florez 6a Edicion.pdf",
        "titulo": "Farmacologia Humana <span class=\"libro-edicion\">6° Edición</span>",
        "autor": "Jesus Florez",
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLIMVU6KEWT4OFVG2KPAC2PCTEUFD",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "materia": "24. Farmacología",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCVp5RLT44tTaU8AtPFMlCjAfiWSsNxpeQ-kgANte5QZXU"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "origenId": "01MXVTLIMWK7ZDJTPSPVBYSNLMT24DAJQK",
        "autor": "Netter",
        "origenImportacion": "Bioquimica OneDrive",
        "nombreArchivo": "Netter Anatomia Clinica 3a Edicion.pdf",
        "materia": "28. Clínica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCWV_I0zfJ9Q4k1bJ64MCYKAbRa6FC7ScqgpjcpMQIsN_M",
        "titulo": "Anatomia Clinica <span class=\"libro-edicion\">3° Edición</span>",
        "carrera": "Bioquímica"
    },
    {
        "titulo": "Identificación de fuentes y dispositivos radiactivos",
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "nombreArchivo": "Identificación de fuentes y dispositivos radiactivos.pdf",
        "materia": "31. Metodología de Radiosótopos",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCWz1g3nRqJSYCGbQv5GkjUAbX5Gfb9KzxkyikTWS57PVo",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenId": "01MXVTLIMWZ5MDPHI2RFEYBBTNBP4RUSGU",
        "autor": "MANUAL DE REFERENCIA"
    },
    {
        "titulo": "El proceso de investigación en instituciones de educación en México",
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "nombreArchivo": "El proceso de investigación en instituciones de educación en México.pdf",
        "origenId": "01MXVTLIMX3I2DEQH7SBGIPDTFCTCUSMPJ",
        "carrera": "Bioquímica",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCX2jQyQP-QTIeOZRTFSTHpARI4SV8ZKS936TuuahRi31M",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "materia": "3. Metodología de Estudio",
        "autor": "Miguel Ángel Rangel Romero et al"
    },
    {
        "carrera": "Bioquímica",
        "origenId": "01MXVTLIMXELKMIWFTVFC3LYWYFFBENHSP",
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Neuroética: una guía multifacética",
        "materia": "10. Ética y Bioética",
        "autor": "Mariel Kalkach Aparicio y José Damián Carrillo Ruíz",
        "nombreArchivo": "Neuroetica.pdf",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCXItTEWLOpRbXi2ClCRp5PAT_VTgU0IAwYXqOSQU0Hq8M",
        "estadoPortada": "pendiente"
    },
    {
        "autor": "Carmen García Ruiz",
        "fechaImportacion": {
            "seconds": 1792413003,
            "nanoseconds": 226000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCXL9VDTTd1TqNiZFtDYQIBAcZEJahySqZUFNDTB4mE1l4",
        "materia": "38. Quimica Legal y Forense",
        "nombreArchivo": "Introduccion a la quimica forense.pdf",
        "origenId": "01MXVTLIMXF7KUGTJXOVHKGYTELNBWCAQB",
        "estadoPortada": "pendiente",
        "carrera": "Bioquímica",
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Introduccion a la quimica forense"
    },
    {
        "estadoPortada": "pendiente",
        "carrera": "Bioquímica",
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "Rolando Polo Collantes",
        "titulo": "Química: Nomenclatura inorgánica",
        "materia": "37. Quimica Inorganica",
        "nombreArchivo": "Nomenclatura inorgánica.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenId": "01MXVTLIMXKRCBHQ7L6ZEKSX526WBDJCXC",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCXVEQTw-v2SKlfuvWCNIriAQ6iI7DOQ9xADAAV6PbT9Ao"
    },
    {
        "carrera": "Bioquímica",
        "origenId": "01MXVTLIMXSPTAJC3NGFAJP3F7RXNNDHXQ",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "titulo": "Biologia <span class=\"libro-edicion\">IV Medio</span>",
        "materia": "2. Biología General",
        "autor": "S/A",
        "origenImportacion": "Bioquimica OneDrive",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCXk-YEi20xQJfsv43a0Z7wAZftdAW4_XUTnb0hxszfDz4",
        "nombreArchivo": "Biologia IV Medio.PDF"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792413003,
            "nanoseconds": 226000000
        },
        "titulo": "Química orgánica: fundamentos prácticos para el laboratorio",
        "origenImportacion": "Bioquimica OneDrive",
        "estadoPortada": "pendiente",
        "materia": "39. Quimica Organica",
        "carrera": "Bioquímica",
        "origenId": "01MXVTLIMYGMFSESDL4RAYJIBR7YSUUOAS",
        "autor": "Dr. Lydia R. Kurman",
        "nombreArchivo": "Quimica organica fundamentos practicos para el laboratorio_booksmedicos.org.pdf",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCYMwsiSGvkQYSgMf4lSjgSAav0SXPV3l7pO0GURtvHkP0"
    },
    {
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "origenId": "01MXVTLIMYZ7NOLVRMZBG32OYAEOCGT2DI",
        "titulo": "Conceptos de Genetica <span class=\"libro-edicion\">10° Edicion</span>",
        "nombreArchivo": "Conceptos de Genetica Klug 10a Edicion.pdf",
        "materia": "21. Genética",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCYz9rl1izITb07ACOEaehoARHQ_n9xe4qtMXkIzScEGYs",
        "autor": "William S. Klug",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "materia": "4. Química General",
        "origenImportacion": "Bioquimica OneDrive",
        "estadoPortada": "pendiente",
        "nombreArchivo": "historia de la quimica.pdf",
        "carrera": "Bioquímica",
        "autor": "Isaac Asimov",
        "origenId": "01MXVTLIMZLLFQU4DOOVFY2Z3MYXJGMAHA",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCZWssKcG51S41nbMXSZgDgAQuIctwzgWnwygN5UMLLNMI",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "titulo": "historia de la quimica: Introducción a las ideas y conceptos de la química"
    },
    {
        "titulo": "Inmunología <span class=\"libro-edicion\">14° Edición</span>",
        "origenId": "01MXVTLIN25RUS7SJIZVE2GEYCLSIUAJX5",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "nombreArchivo": "Inmunología AMIR 14va Edición.pdf",
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQC67GkvySjNSaMTAlyRQCb9AZQ_mdcfzfk3DmmQ-3FzG30",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "AMIR",
        "estadoPortada": "pendiente",
        "materia": "25. Inmunología"
    },
    {
        "origenId": "01MXVTLIN2ZMXS6UG25BFLSEEN5FGJ6GDO",
        "materia": "11. Fisiopatología Humana",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "carrera": "Bioquímica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "titulo": "Fisiopatología",
        "nombreArchivo": "Fisiopatología - Uribe.pdf",
        "autor": "Raul  A. Uribe",
        "estadoPortada": "pendiente",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQC6yy8vUNroSrkQjelMnxhuAaq22nc3xqXpRbnhe51733M",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "autor": "Rubén Lisker",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQC7o5tDIuWVQ7lJUb0n8z6AAXXpBe8DetWhltx8QdIyz8E",
        "origenId": "01MXVTLIN3UONUGIXFSVB3SSKRXUT7GPUA",
        "materia": "21. Genética",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "estadoPortada": "pendiente",
        "nombreArchivo": "Introduccion a la genetica humana.pdf",
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Introduccion a la genetica humana <span class=\"libro-edicion\">3° Edición</span>",
        "carrera": "Bioquímica"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "origenId": "01MXVTLIN6IOLKPYV4W5A3KJGGXT6RIS6N",
        "autor": "Edna Martha Hamill Meléndez",
        "origenImportacion": "Bioquimica OneDrive",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQC-Q5an4ry3QbUkxrz9FEvNAX2Dn7tNtYaXsmb2ykeec-s",
        "nombreArchivo": "Tanatologia y Bioetica ante el sufrimiento humano.pdf",
        "materia": "10. Ética y Bioética",
        "titulo": "Tanatología y Bioética: ante el sufrimiento humano",
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQC-drgPqQ92TLLIJF4FxWt-AcNvOB5evXE07U3aBObChiI",
        "materia": "14. Citología Clínica",
        "carrera": "Bioquímica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente",
        "titulo": "Citología General <span class=\"libro-edicion\">2° Edición</span>",
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "Felipe Ranilla López et al",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "origenId": "01MXVTLIN6O24A7KIPOZGLFSBELYC4K236",
        "nombreArchivo": "Citología General.pdf"
    },
    {
        "titulo": "Síndromes",
        "origenId": "01MXVTLIN6Z5XU7LGIQ5EKRRB2ZY5EFKRZ",
        "estadoPortada": "pendiente",
        "nombreArchivo": "Síndromes - Raimundo Llanio Navarro.pdf",
        "carrera": "Bioquímica",
        "origenImportacion": "Bioquimica OneDrive",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQC-z29PrMiHSKjEOs46Qqo5AapxmMgcyOC7zgaodWsXQA0",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "materia": "21. Genética",
        "autor": "Dr. Raimundo Llanio Navarro (et al)"
    },
    {
        "titulo": "Anatomía Humana - IV <span class=\"libro-edicion\">11  Edición</span>",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQC_4pxKia-JQKfR1gNk-5ShAUv8q16lVax6oF1HP7w8IVs",
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "nombreArchivo": "Anatomía Humana - Rouviere IV 11  Edición.pdf",
        "autor": "Rouviere",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenId": "01MXVTLIN74KOEVCNPRFAKPUOWANSPXFFB",
        "materia": "1. Anatomia Humana",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        }
    },
    {
        "origenId": "01MXVTLINAC443M33Q5FFYG5NBORYYRHDI",
        "materia": "39. Quimica Organica",
        "carrera": "Bioquímica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792413003,
            "nanoseconds": 226000000
        },
        "titulo": "Ejercicios Practicos de Introduccion a la Quimica Organica",
        "nombreArchivo": "Ejercicios Practicos de Introduccion a la Quimica Organica.pdf",
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "Juan A. Llorens Molina",
        "estadoPortada": "pendiente",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCgFzm2b3DpS4N1oXRxiJxoAV4Bj-KJxSG7ib5Ix8AleBw"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenId": "01MXVTLINAUBLRL525IBHJMWNVILCNHCRQ",
        "autor": "CTO",
        "origenImportacion": "Bioquimica OneDrive",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCgoFcV911ATpZZtULE04owAWLwYVQlRu2uQlkm82kKDk4",
        "nombreArchivo": "(CTO) Hematologia 11ed-2019.pdf",
        "materia": "27. Hematología",
        "titulo": "Hematologia <span class=\"libro-edicion\">11° Edición (2019)</span>",
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente"
    },
    {
        "carrera": "Bioquímica",
        "nombreArchivo": "Ross Histologia Texto y Atlas 8e.pdf",
        "origenId": "01MXVTLINBHJFS3PZ6ZNF33YSMHBEDMZK5",
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "9. Histología Humana",
        "estadoPortada": "pendiente",
        "titulo": "Ross Histología Texto y Atlas: Correlación con Biología Molecular y Celular <span class=\"libro-edicion\">8ed</span>",
        "autor": "Michael H. Ross y Wojciech Pawlina",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQChOkstvz7LS73iTDhINmVdAc575g2_6_oyk_Csjc1Q7e4"
    },
    {
        "autor": "S/A",
        "titulo": "Tabla periódica de los elementos",
        "nombreArchivo": "Tabla periódica de los elementos.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "origenImportacion": "Bioquimica OneDrive",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "origenId": "01MXVTLINBHOMYP2BK7RF225NI5KB5VESV",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQChO5mH6Cr8S611qOqD2pJVAZskxd1iKpx426-WeXJ0Sxs",
        "materia": "17. Fisicoquímica",
        "estadoPortada": "pendiente"
    },
    {
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLINCH46A4XOKRBAIYHTJGRJENSLQ",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "Toxicología Fundamental- Manuel Repetto Jiménez 4a Ed.pdf",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCiPzwOXcqIQIweaTRSRslwAbN1e4EqQLdQFzathTAgmAQ",
        "titulo": "Toxicología Fundamental <span class=\"libro-edicion\">4ed</span>",
        "materia": "19. Toxicología",
        "carrera": "Bioquímica",
        "autor": "Manuel Repetto Jiménez y Guillermo Repetto Kuhn"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCiZcimzTSgTbLcuFPio6c6ATSdv3l04nqt4yw1d5iUmj4",
        "nombreArchivo": "INTERCHANGE_1.pdf",
        "origenImportacion": "Bioquimica OneDrive",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "autor": "Jack C. Richards",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenId": "01MXVTLINCMXEKNTJUUBG3FXFYKPRKHJZ2",
        "estadoPortada": "pendiente",
        "materia": "15. Ingles Técnico",
        "titulo": "INTERCHANGE 1 <span class=\"libro-edicion\">4° Edición</span>",
        "carrera": "Bioquímica"
    },
    {
        "titulo": "QUÍMICA <span class=\"libro-edicion\">4</span>",
        "origenImportacion": "Bioquimica OneDrive",
        "nombreArchivo": "QUÍMICA (4).pdf",
        "estadoPortada": "pendiente",
        "origenId": "01MXVTLINDQHWMVX5NUVE2FH6G2EW4A2XO",
        "carrera": "Bioquímica",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "autor": "Víctor Caro Sánchez Benites (et al)",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "materia": "4. Química General",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCjgezK362lSaKfxtEtwGruAWgw_JHd8A719Fav-ao3Px8"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "origenId": "01MXVTLINEK634LV74RVBYURRY2NR7PBOD",
        "nombreArchivo": "Biologia 3-María Bisheimer.pdf",
        "autor": "María Bisheimer",
        "materia": "2. Biología General",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCkV7fF1_yNQ4pGONNj94XDAaYaW0Ted0OUQFTitAxeDFE",
        "titulo": "Biologia 3",
        "carrera": "Bioquímica",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "titulo": "Manual de Toxicologia Clinica <span class=\"libro-edicion\">7° Edición</span>",
        "materia": "19. Toxicología",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "autor": "Dreisbach",
        "nombreArchivo": "Manual de Toxicologia Clinica de Dreisbach.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQClZDKx8T7sSK4x9x0dT8J5AbfvuYAvfsqkme39JLRLZx4",
        "origenId": "01MXVTLINFMQZLD4J65REK4MPXDUOU7QTZ",
        "estadoPortada": "pendiente"
    },
    {
        "origenId": "01MXVTLINFTVRBWQIFG5D37IO4S5ZHD35Y",
        "origenImportacion": "Bioquimica OneDrive",
        "estadoPortada": "pendiente",
        "materia": "15. Ingles Técnico",
        "carrera": "Bioquímica",
        "nombreArchivo": "INTERCHANGE_INTRO.pdf",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQClnWIbQQU3R7-h3Jdyce-4AZtalSIa2_G8OwX7knQ1zb0",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Jack C. Richards",
        "titulo": "INTERCHANGE INTRO",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        }
    },
    {
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "Maroa Coral de Dios",
        "titulo": "Biología 2",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "nombreArchivo": "NES Biología 2-Maroa Coral de Dios.pdf",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "materia": "2. Biología General",
        "estadoPortada": "pendiente",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCm0iriR_ffRqkZHKjLvRpFATRiOYAsQA49P_w1_SXZ-Vk",
        "origenId": "01MXVTLING2IVOER7X35DKSGI4VDF32GSF"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "carrera": "Bioquímica",
        "titulo": "Área A Química",
        "nombreArchivo": "Área A Química.pdf",
        "estadoPortada": "pendiente",
        "materia": "4. Química General",
        "origenImportacion": "Bioquimica OneDrive",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCmpG-obSEXRbSzO3o5FLrJAY1fH5-Grvo4y65KW4mJKPQ",
        "autor": "S/A",
        "origenId": "01MXVTLINGURX2Q3JBC5C3JMZ3PI4RJOWJ",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "nombreArchivo": "quimica-inorganica-gustavo-adolfo-gonzalez-dardon.pdf",
        "titulo": "Química Inorgánica",
        "estadoPortada": "pendiente",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCnDuF19wVcSJ-pbQ9eyrYLAUYv20_aRCF-MHf5RzVTzC8",
        "carrera": "Bioquímica",
        "autor": "Ig. Gustavo Adolfo González Dardó",
        "materia": "37. Quimica Inorganica",
        "origenId": "01MXVTLINHB3QXL5YFLREJ7KLNB5PMVNQL",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "carrera": "Bioquímica",
        "titulo": "Farmacología Médica en Esquemas <span class=\"libro-edicion\">5° Edición</span>",
        "nombreArchivo": "Farmacología Médica en Esquemas 5°ed.pdf",
        "estadoPortada": "pendiente",
        "origenId": "01MXVTLINJH3E72A5OKNDLT4NRB6Z4NO7R",
        "materia": "24. Farmacología",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "Michael J. Neal",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCpPsn9A65TRrnxsQ-zxrvxAZjOUSPIC4e7rRFIbLO1Sk8"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "materia": "21. Genética",
        "origenImportacion": "Bioquimica OneDrive",
        "estadoPortada": "pendiente",
        "nombreArchivo": "Genetica Clinica_booksmedicos.org.pdf",
        "carrera": "Bioquímica",
        "autor": "José Guizar - Vazquez",
        "origenId": "01MXVTLINM2HIEBLEYHRDZ5T4U774QXYIW",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCs0dBArJg8R57PlP_5C-EWAa4w0c3QdnsYQQ9oOJ61yiE",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "titulo": "Genetica Clinica <span class=\"libro-edicion\">3° Edición</span>"
    },
    {
        "origenId": "01MXVTLINM5PYWJIRVJJC2SVVRB7ECPEUA",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "El Idioma Guarani",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCs6_FkojVKRalWsQ_IJ5KAARCOOSBca8NzzdGFo6tFCpM",
        "materia": "13. Comunicación Oral y Escrita Guaraní",
        "nombreArchivo": "Saguier 1951 El Idioma Guarani.pdf",
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente",
        "autor": "EDUARDO SAGUIER"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCuMiUBUBHFRJ922KEw_Et0AVLteaxXQJz1goszZ-Y2IgE",
        "titulo": "Física y química II",
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLINOGISQCUARYVCJ65WYUEYPYS3U",
        "carrera": "Bioquímica",
        "autor": "Silvia Calderón et al",
        "nombreArchivo": "Física y química II _ Serie nuevas miradas - Tinta fresca.pdf",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "estadoPortada": "pendiente",
        "materia": "17. Fisicoquímica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "materia": "3. Metodología de Estudio",
        "carrera": "Bioquímica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCuXQhaCtpXTbaKGxDGCnQNAX1Q97K6G5dkOeW9vXfmNNg",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Montserrat Gómez",
        "nombreArchivo": "Técnicas de aprendizaje.pdf",
        "titulo": "TÉCNICAS DE ESTUDIO Y ESTRATEGIAS DE APRENDIZAJE",
        "origenId": "01MXVTLINOLUEFUCW2K5G3NCQ3CDDAU5AN",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "origenImportacion": "Bioquimica OneDrive",
        "estadoPortada": "pendiente"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCv2gS5krGcRofy1wUxHMZVAZnZBew1CkR0O6-DcZwHpgc",
        "titulo": "La investigación como vía para comprender y transformar la enseñanza",
        "origenId": "01MXVTLINP3ICLTEVRTRDIP4WXAUYRZRSV",
        "estadoPortada": "pendiente",
        "nombreArchivo": "La investigación como vía para comprender y transformar la enseñanza.pdf",
        "carrera": "Bioquímica",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "autor": "Bahamonde Márquez et al",
        "materia": "3. Metodología de Estudio",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "estadoPortada": "pendiente",
        "carrera": "Bioquímica",
        "origenId": "01MXVTLINP5JOLQRFRFFAJFOM7NR7YEUGT",
        "titulo": "Las Practicas Profesionales",
        "materia": "29. Pasantía Supervisada",
        "autor": "Selvaggio - Martins",
        "nombreArchivo": "Las Practicas Profesionales.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCv6ly4RLEpQJK5n2x_glDTATOgRacy2tLIzNnZga2w1PI",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "autor": "Goodman & Gilman",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "carrera": "Bioquímica",
        "materia": "24. Farmacología",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCvS4zv-ZegRrxYhMTK8AydAelHKSjgXHVCleOjzmoGIpw",
        "titulo": "Las bases farmacologicas de la terapeutica <span class=\"libro-edicion\">12° Edición</span>",
        "origenId": "01MXVTLINPJOGO76MXUBDLYWEEYTFPADE5",
        "nombreArchivo": "Goodman & Gilman Las bases farmacologicas de la terapeutica 12a Edicióon.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "origenId": "01MXVTLINPVXAXQ7OO4JEYGUWIMSIZ43EP",
        "nombreArchivo": "Gordis_Epidemiologia_5a_Ed_Libros_Medico.pdf",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCvrcF4fc7iSYNSyGSRnmyPAfvM0R_CzgCsaMj5KSCwzg0",
        "origenImportacion": "Bioquimica OneDrive",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente",
        "materia": "30. Salud Pública y Epidemiología",
        "titulo": "Epidemiologia <span class=\"libro-edicion\">5° Edición</span>",
        "autor": "Gordis",
        "carrera": "Bioquímica"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCxcGlBoYbFTKr6s_GjDmKXAeqE5QvaZ0MaYH67XV4GRQw",
        "autor": "Mauricio Bautista Ballén & Francia Leonora Salazar Suáre",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "materia": "17. Fisicoquímica",
        "nombreArchivo": "Hipertexto Santillana 2.pdf",
        "origenId": "01MXVTLINROBUUDIMGYVGKV6VT6GRQ4YUX",
        "estadoPortada": "pendiente",
        "titulo": "Hipertexto Santillana 2",
        "carrera": "Bioquímica",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "carrera": "Bioquímica",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "titulo": "HEMATOLOGIA <span class=\"libro-edicion\">3° Edición</span>",
        "origenId": "01MXVTLINT4IRROGROHZEY2LV6UDMVZVIM",
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "27. Hematología",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Manual AMIR",
        "nombreArchivo": "HEMATOLOGIA AMIR 60 1.1.pdf",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCz4iMXGi4-SY0uvqDZXNUMAZVbf5XhVZ4eTb-8AsgmWBs"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQCz80G5SOXeTb1vEKb6HhfkASMfbw7JtccdiYLJoCrp6Xo",
        "estadoPortada": "pendiente",
        "autor": "Miguel Ortuño Ortín",
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLINT6NA3SSHF3ZG323YQU35B4F7E",
        "titulo": "Física Cuántita",
        "nombreArchivo": "Física Cuántita. Miguel Ortuño Ortín.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "carrera": "Bioquímica",
        "materia": "34. Fisica"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQC0VfYpbOOtRIxc-CpVZ0_FAWpmaPZfmcShWzd9J6hqlj8",
        "autor": "Juan Carlo Autino et al",
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente",
        "origenId": "01MXVTLINUKX3CS3HDVVCIYXHYFJKWOT6F",
        "nombreArchivo": "Introduccion a la quimica organica.pdf",
        "materia": "39. Quimica Organica",
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Introduccion a la quimica organica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792413003,
            "nanoseconds": 226000000
        }
    },
    {
        "carrera": "Bioquímica",
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Flashcards Anatomia <span class=\"libro-edicion\">6a Edicion</span>",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "materia": "1. Anatomia Humana",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQC19gEOLU3XTLOUqrzh7g2qAWp2uQ0YFuNPj9Zu6LSJwrk",
        "origenId": "01MXVTLINV6YAQ4LKN25GLHFFKXTQ64DNK",
        "nombreArchivo": "Netter Flashcards Anatomia 6a Edicion.pdf",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Netter"
    },
    {
        "materia": "31. Metodología de Radiosótopos",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQC1C9BgCO5TQJ9NvLOkXyqpAV3MB-_HjM9j9EyEOmVzm74",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Degrossi &  Touya",
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "origenId": "01MXVTLINVBPIGACHOKNAJ6TN4WOSF6KVJ",
        "nombreArchivo": "MEDICINA NUCLEAR.pdf",
        "estadoPortada": "pendiente",
        "titulo": "MEDICINA NUCLEAR"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "nombreArchivo": "Estrategia Nacional Biotecnología.pdf",
        "titulo": "Estrategia Nacional Biotecnología <span class=\"libro-edicion\">2025-2023</span>",
        "estadoPortada": "pendiente",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQC1GHWzeGOtRLJg9ecp901YAaZIwtQ0Pji9FSx_dp9_SYM",
        "autor": "Autor Institucional",
        "carrera": "Bioquímica",
        "materia": "23. Biotecnología",
        "origenId": "01MXVTLINVDB23G6DDVVCLEYHV44U7OTKY",
        "origenImportacion": "Bioquimica OneDrive",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "origenId": "01MXVTLINVVOOXPAOZFFBYGNKPMLFZXVS2",
        "materia": "35. Quimica Ambiental",
        "carrera": "Bioquímica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQC1q513gdkpQ4M1T2LLm9ZaAdoI_B3CM0lvAEledKHrqvs",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenImportacion": "Bioquimica OneDrive",
        "estadoPortada": "pendiente",
        "autor": "CHAN-KEB, Carlos Armando  AGRAZ- HERNÁNDEZ, Claudia Maricusa  PERÉZ-BALÁN, Román Alberto  GUTIÉRREZ-ALCÁNTARA, Eduardo Jahir",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "titulo": "Quimica Ambiental",
        "nombreArchivo": "Quimica Ambiental.pdf"
    },
    {
        "origenId": "01MXVTLINWRUAD3NCSUNBLAOM7RZUW5XTO",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "Bioquimica Y Biologia Molecular Para Ciencias De La Salud.pdf",
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Bioquimica Y Biologia Molecular Para Ciencias De La Salud <span class=\"libro-edicion\">3° Edición</span>",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQC2jQA9tFKjQrA5n45pbt5uAdplZvd_VuCjR8pdWqs0Cfw",
        "materia": "17. Fisicoquímica",
        "carrera": "Bioquímica",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "autor": "Galindo, García-Borrón, Lozano, Martínez-Liarte, Peñafiel, Solano"
    },
    {
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "2. Biología General",
        "estadoPortada": "pendiente",
        "carrera": "Bioquímica",
        "nombreArchivo": "Brock. Biología de los Microorganismos.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "titulo": "Brock. Biología de los Microorganismos <span class=\"libro-edicion\">14° Edición</span>",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQC3AsyTq7BPTILWrFbkAzQvAemez-MmSwwRn26EWXLmaGg",
        "origenId": "01MXVTLINXALGJHK5QJ5GIFVVMK3SAGNBP",
        "autor": "Michael T. Madigan et al"
    },
    {
        "carrera": "Bioquímica",
        "titulo": "Introduccion a la biotecnología <span class=\"libro-edicion\">2° Edición</span>",
        "materia": "23. Biotecnología",
        "autor": "Thieman - Palladino",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQC3Bbh5aM_8SaMXXvMAEQe4AZGfqcYRgY4PwXrAYFMB2no",
        "origenId": "01MXVTLINXAW4HS2GP7RE2GF266MABCB5Y",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "origenImportacion": "Bioquimica OneDrive",
        "nombreArchivo": "Introduccion a la biotecnología.pdf"
    },
    {
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "materia": "8. Fisiología Humana",
        "carrera": "Bioquímica",
        "nombreArchivo": "Guyton y Hall Tratado de Fisiologia 13ed.pdf",
        "autor": "Guyton y Hall",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "origenId": "01MXVTLINYEVAU53ZSS5DJE3V4FJDYF6OS",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQC4JUFO7zKXRpJuvCpHgvnSAZ1ORnhNbWt9rvF8LhmlgpA",
        "titulo": "Tratado de Fisiologia <span class=\"libro-edicion\">13° Edición</span>",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQC4pPvZMLCHSZqPhYHzhxvUAWtFYy4g9a-F5dN-KVhmnro",
        "titulo": "Cálculo Diferencial e Integral",
        "origenId": "01MXVTLINYUT55SMFQQ5EZVD4FQHZYOG6U",
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "autor": "Granville",
        "nombreArchivo": "Cálculo Diferencial e Integral [Granville].pdf",
        "estadoPortada": "pendiente",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "materia": "6. Cálcula Diferencial e Integral"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "materia": "4. Química General",
        "carrera": "Bioquímica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLINZA43OJEQPAJFZTZ27DSM2RVHX",
        "estadoPortada": "pendiente",
        "titulo": "Química: Enlace químico - Geometría y fuerzas intermoleculares",
        "autor": "Cesar Urquizo y Ricardo Vega",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQC5Bzbkkg8CS5nnXxyZqNT3AUYtOQcICvXTQesPOGVcI-A",
        "nombreArchivo": "Química- Enlace químico - Geometría y fuerzas intermoleculares.pdf"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQC5X9gYpa-tQqPt1RnNrD1IAYh96taBTZ2UJuJP_GGQdic",
        "autor": "Dorantes y Martinez",
        "carrera": "Bioquímica",
        "materia": "28. Clínica",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "titulo": "Endocrinologia_Clinica_de_Dorantes <span class=\"libro-edicion\">5° Edición</span>",
        "nombreArchivo": "Endocrinologia_Clinica_de_Dorantes.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenId": "01MXVTLINZL7MBRJNPVVBKH3OVDHG2YPKI",
        "origenImportacion": "Bioquimica OneDrive",
        "estadoPortada": "pendiente"
    },
    {
        "materia": "2. Biología General",
        "origenId": "01MXVTLIO2HUJEORVKBRGZEHD223TQEYLK",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Biologia Molecular de Celula <span class=\"libro-edicion\">6° edición</span>",
        "estadoPortada": "pendiente",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDaPRJHRqoMTZIcetbnAmFqAVuWkYunPAjNGfGifj4-CKQ",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "nombreArchivo": "Biologia Molecular da Celula 6e.pdf",
        "autor": "Alberts, Johnson, Lewis, Morgan, Raff, Roberts, Walter"
    },
    {
        "carrera": "Bioquímica",
        "titulo": "Calculo Diferencial: Una Introduccion <span class=\"libro-edicion\">1° Edicion</span>",
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "6. Cálcula Diferencial e Integral",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "nombreArchivo": "Calculo Diferencial - Una Introduccion - 1ra Edicion Julio-2020.pdf",
        "origenId": "01MXVTLIO2ROZWSXEM65GL6PJL7TRMDG62",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDai7NpXIz3TL89K_ziwZvaAQGXYIKo86R1a8Nd0EwTWq4",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Triviño Macías, Jorge Enrique; Triviño Quiceno, Juan Alexander. Oviedo Plazas, Luis Alberto. Florencia",
        "estadoPortada": "pendiente"
    },
    {
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "FRANCO DÍEZ, EDUARDO et al",
        "titulo": "Endocrinología AMIR 14va Edición <span class=\"libro-edicion\">14° Edición</span>",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "materia": "2. Biología General",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDbB_aq0hPjSYCH7ULAs5dIARUCa-vk3pQHaZERxXuF7rI",
        "nombreArchivo": "Endocrinología AMIR 14va Edición.pdf",
        "origenId": "01MXVTLIO3A73KVUQT4NEYBB7NILALHF2I"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDc2jFr43VAS4OvqEjVnNwtAdYMSw8XXR-zIc9ohWijdhA",
        "autor": "Josip Slisko",
        "carrera": "Bioquímica",
        "materia": "17. Fisicoquímica",
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Fisica 1:  El gimnasio de la mente <span class=\"libro-edicion\">2da Edición</span>",
        "nombreArchivo": "1.Fisica 1 El gimnasio de la mente, 2da Edición.pdf",
        "origenId": "01MXVTLIO43IYWXY3VIBFYHL5IJDKZZXBN",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente"
    },
    {
        "materia": "30. Salud Pública y Epidemiología",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenId": "01MXVTLIO4DVBUCAL7H5AZZVWEY6673DFD",
        "estadoPortada": "pendiente",
        "nombreArchivo": "Epidemiología Clínica.pdf",
        "autor": "Laura Morena Altamirano",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "titulo": "Epidemiología Clínica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDcHUNBAX8_QZzWxMe9_YyjAVwCdqh2vaFlSEJoyc_--Gc"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDcXrZ4A_DFQIUDXAt064rNAfxLs2d0p1ea0L9pddnmiVk",
        "estadoPortada": "pendiente",
        "autor": "Álvaro J. Ruiz Morales y Carlos Gómez-Restrepo",
        "carrera": "Bioquímica",
        "materia": "30. Salud Pública y Epidemiología",
        "nombreArchivo": "Epidemiología Clínica-Investigación Clínica Aplicada 2°ed.pdf",
        "titulo": "Epidemiología Clínica: Investigación Clínica Aplicada <span class=\"libro-edicion\">2°edición</span>",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLIO4L23HQA7QYVAIKA24BN2OXCWN"
    },
    {
        "carrera": "Bioquímica",
        "titulo": "Electroquímica Teoría y Práctica",
        "materia": "4. Química General",
        "autor": "Cesar Urquizo P",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDcwWMQq5KpRLQk-z5Krl3ZAX_0AoJrH57YmlK9kVVgr5g",
        "nombreArchivo": "Electroquímica Teoría y Práctica.pdf",
        "origenId": "01MXVTLIO4YFRRBK4SVFCLIJH3HZFK4XOZ",
        "origenImportacion": "Bioquimica OneDrive",
        "estadoPortada": "pendiente"
    },
    {
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "autor": "Cynthia N",
        "materia": "22. Microbiología General",
        "titulo": "Microbiología <span class=\"libro-edicion\">4° Edición</span>",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "LIR. Microbiología - Cynthia N.pdf",
        "origenId": "01MXVTLIO5I45NC3R2Q5C2OR2XA2IJSPXH",
        "estadoPortada": "pendiente",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDdRzrRbjqHRadHVwaQmT7nAUUy-xdfMIZMEsmTL7TB8XY"
    },
    {
        "origenImportacion": "Bioquimica OneDrive",
        "nombreArchivo": "Quimica General 7°ed Raymond Chang.pdf",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDdR_7kAoTlTZgqAJKGY7NQASOp3R4bLCWn3yEkwFNXLLQ",
        "autor": "Raymond Chang",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenId": "01MXVTLIO5I77OIAUE4VGZQKQASKDGHM2Q",
        "estadoPortada": "pendiente",
        "materia": "17. Fisicoquímica",
        "titulo": "Quimica General <span class=\"libro-edicion\">7ed</span>",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "carrera": "Bioquímica"
    },
    {
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente",
        "autor": "T. W. Graham Solomons",
        "nombreArchivo": "Química Orgánica - Solomons 2da.pdf",
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Química Orgánica - <span class=\"libro-edicion\">2ed</span>",
        "materia": "39. Quimica Organica",
        "fechaImportacion": {
            "seconds": 1792413003,
            "nanoseconds": 226000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenId": "01MXVTLIO5YYOTHX6JUFGYOQREI36KSWNG",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDdxh0z38mhTYdCJEb8qVmmAQ2KkFEC8wJAaS_tgeuoQno"
    },
    {
        "nombreArchivo": "fisiopatologia-del-sistema-cardiovascular-monica-alonso-del-cano-marta-garcia-poncela-3888.pdf",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "origenId": "01MXVTLIO6BWCU64AGXBBLB4LPNUSTBW6H",
        "titulo": "fisiopatología del sistema cardiovascular",
        "materia": "11. Fisiopatología Humana",
        "carrera": "Bioquímica",
        "autor": "Mónica Alonso del Caño et al",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDeDYVPcAa4QrDxb20lMNvHASEoik_g3pUDqoUemrrblQw",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "nombreArchivo": "principios-basicos-de-medicina-interna.pdf",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "origenId": "01MXVTLIO747QHQQZUMRAZTZFRWPDUKYZ5",
        "titulo": "PRINCIPIOS BÁSICOS DE MEDICINA INTERNA",
        "materia": "28. Clínica",
        "autor": "Med. Cristhian Rubén Vallejo Zambrano (et al)",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDf5-B4QzRkQZnksbPHRWM9AU1O3qTWQS7-8XkK6HT2Hb0",
        "carrera": "Bioquímica",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "autor": "Jawetz, Melnick y Adelberg",
        "titulo": "Microbiologia Medica <span class=\"libro-edicion\">28° Edición</span>",
        "materia": "22. Microbiología General",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "Microbiologia Medica Jawetz, Melnick y Adelberg 28a Edicion.pdf",
        "origenId": "01MXVTLIO7SP4DSHV5MBBLENLRDYPWQVHW",
        "estadoPortada": "pendiente",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDfk_g5Hr1gQrI1cR4faFT2AU6KaRZvPW1ihNFfm1VwG24"
    },
    {
        "carrera": "Bioquímica",
        "titulo": "Citología exfoliativa y de la reproducción",
        "materia": "14. Citología Clínica",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "estadoPortada": "pendiente",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDAKb0YY52QR4I6dMCv2tFHAREnQMbVPJEWfyIUhhanZys",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenId": "01MXVTLIOAFG6RQY45SBDYEOTUYCX5VUKH",
        "autor": "Luis Palaoro Gabriela Mendelu",
        "origenImportacion": "Bioquimica OneDrive",
        "nombreArchivo": "Citología exfoliativa y de la reproducción.pdf"
    },
    {
        "autor": "Leda Giannuzzi",
        "nombreArchivo": "Toxicologia general y aplicada. Leda Giannuzzi.pdf",
        "carrera": "Bioquímica",
        "materia": "19. Toxicología",
        "estadoPortada": "pendiente",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDBg_cgRnVeRbaeupPHdgoIATUKUG27A238ssPjv33ndn8",
        "titulo": "Toxicologia general y aplicada",
        "origenId": "01MXVTLIOBQP3SARTVLZC3NHV2SPDXMCQI",
        "origenImportacion": "Bioquimica OneDrive",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "carrera": "Bioquímica",
        "nombreArchivo": "Biología 3-Alejandra Cornet.pdf",
        "origenId": "01MXVTLIOC2KCUXTQ47ZHI74G54TCZFIUQ",
        "origenImportacion": "Bioquimica OneDrive",
        "estadoPortada": "pendiente",
        "titulo": "Biología 3",
        "materia": "2. Biología General",
        "autor": "Alejandra Cornet",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDC0oVLzhz-To_w3eTFkqKQAefhLqtKtnBw5xf89igxdt0",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        }
    },
    {
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "titulo": "Cuestiones y Problemas de Olimpiadas de Quimica <span class=\"libro-edicion\">parte 5 Electroquimica</span>",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDDUiFw_P-fQaJvjuqjQs0vAdx5o_eWGWeckeMJFkgoOwc",
        "origenId": "01MXVTLIODKIQXB7H7T5A2E34O5KRUFTJP",
        "origenImportacion": "Bioquimica OneDrive",
        "nombreArchivo": "Cuestiones y Problemas de Olimpiadas de Quimica parte 5 Electroquimica.pdf",
        "carrera": "Bioquímica",
        "autor": "MENARGUES-LATRE-GÓMEZ",
        "materia": "4. Química General",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente"
    },
    {
        "carrera": "Bioquímica",
        "titulo": "Wallach Interpretación Clínicas de Pruebas Diagnósticas <span class=\"libro-edicion\">9ed</span>",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDDYm8UsoflSb8DS2ZBRjKrAaBks6WIT80fN8L1eKUqxF0",
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "28. Clínica",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "origenId": "01MXVTLIODMJXRJMUH4VE36A2LMZAUMMVL",
        "autor": "Mary A. Williamson",
        "estadoPortada": "pendiente",
        "nombreArchivo": "Wallach_Interpretacion_Clinica_de.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDE7PL4cNDyRKtEscwNV9ufAQXOGoRzwNGbpPbn_msnGk0",
        "estadoPortada": "pendiente",
        "titulo": "Bioquímica Clínica para ciencias de la salud <span class=\"libro-edicion\">1° Edición</span>",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "nombreArchivo": "Bioquímica Clínica para ciencias de la salud.pdf",
        "carrera": "Bioquímica",
        "autor": "Q. F. Nancy Azucena Sorroza Rojas M. Sc et al",
        "origenId": "01MXVTLIOE5TZPQ4GQ6JCKWRFRZQGVPW47",
        "origenImportacion": "Bioquimica OneDrive",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "materia": "28. Clínica"
    },
    {
        "origenId": "01MXVTLIOEUXKLPBZJO5HKPBWJ33RULSQ5",
        "materia": "6. Cálcula Diferencial e Integral",
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "estadoPortada": "pendiente",
        "titulo": "Matemáticas Superiores : Cálculo Diferencial e Integral",
        "autor": "Ya. S. Bugrov - S. M. Nikolski",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDEpdS3hyl3TqeGyd7jRcodAefRgneLg4uz3uRSDcDiIig",
        "nombreArchivo": "Copia de Matemáticas Superiores - Cálculo Diferencial e Integral - Ya. S. Bugrov - S. M. Nikolski - MIR.pdf"
    },
    {
        "nombreArchivo": "FEDUCHI Bioquímica Conceptos esenciales.pdf",
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLIOFNINRKYHOIZH23ILG7W3KZ22C",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "titulo": "Bioquímica: Conceptos esenciales",
        "materia": "18. Bioquímica",
        "carrera": "Bioquímica",
        "autor": "FEDUCHI",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDFahsVYO5GT62hZv22rOtCAagH0RUljy5k-_QQq2_MmC8"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "PROPEDEUTICA CLINICA Y SEMIOLOGIA MEDICA Tomo I.pdf",
        "origenId": "01MXVTLIOG67XATCV72ZDYPGQLRHH7BN6N",
        "estadoPortada": "pendiente",
        "autor": "Raimundo Llanio Navarro y coautores",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDG9-4Jir_WR4eaC4nP8LfNASUeltCXs93830MafDjdfW4",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "materia": "28. Clínica",
        "titulo": "PROPEDEUTICA CLINICA Y SEMIOLOGIA MEDICA <span class=\"libro-edicion\">Tomo I</span>",
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "materia": "9. Histología Humana",
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "autor": "Gomez de Ferraris",
        "nombreArchivo": "Histologia y Embriologia Bucodental-Gomez de Ferraris.pdf",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "origenId": "01MXVTLIOGBMCDFUE5TNBIV5M7JFACZM5Y",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDGCwQy0J2bQor1n0lALLO4AUQ6pmHFJJHXr5EwaoMlxS8",
        "titulo": "Histologia y Embriologia Bucodental <span class=\"libro-edicion\">2° Edición</span>",
        "estadoPortada": "pendiente"
    },
    {
        "carrera": "Bioquímica",
        "titulo": "Manual de Prácticas Laboratorio de Histología",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "origenId": "01MXVTLIOGEEZIXKGJYZH3T7PPOXVKE7FH",
        "materia": "9. Histología Humana",
        "estadoPortada": "pendiente",
        "autor": "Martinez",
        "nombreArchivo": "Manual de Prácticas Laboratorio de Histología - Martinez.pdf",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDGITKLqMnGT7n973XqonynAcveS4MFAogRVsHE6iDtX_w",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "materia": "8. Fisiología Humana",
        "carrera": "Bioquímica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLIOHVPU2E6FKIVD22RIK72AGMFZR",
        "titulo": "AnatomIa y Fisiologia: La unidad entre la forma y la funcion",
        "nombreArchivo": "Kenneth Saladin.AnatomIa y Fisiologia.La unidad entre la forma y la funcion.pdf",
        "estadoPortada": "pendiente",
        "autor": "Kenneth Saladin.",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDHq-mieKpFR61FCv6AZhcxAWfWFTegXqcre12pZM9SOZQ"
    },
    {
        "nombreArchivo": "Inmunologia Basica Abbas 6a Edicion.pdf",
        "autor": "Abbas et al",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDJ3IZh3381QKksjcmLBRVMAYdqirOCgfpzKMiF5fnCpRA",
        "estadoPortada": "pendiente",
        "titulo": "Inmunologia Basica <span class=\"libro-edicion\">6° Edición</span>",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "origenId": "01MXVTLIOJ3SDGDX37GVAKSLENZGFQKFKM",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "materia": "25. Inmunología"
    },
    {
        "carrera": "Bioquímica",
        "titulo": "Fisiopatología médica.: Una introducción a la medicina clínica. <span class=\"libro-edicion\">5 Ed.</span>",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDJQ92moLz7Ra17ue-F_-p9ARsYJcBD6xlWgRD0OyfZBPg",
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "11. Fisiopatología Humana",
        "origenId": "01MXVTLIOJIPO2NIF47NC2265Z56C772T5",
        "autor": "McPhee. Ganong",
        "nombreArchivo": "Fisiopatología médica. Una introducción a la medicina clínica. McPhee. Ganong 5 Ed..pdf",
        "estadoPortada": "pendiente",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "materia": "17. Fisicoquímica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDLZcaOLY2rQYZAdZgHiEP3ATmzhRN0Ipi_aV8toO3gylw",
        "carrera": "Bioquímica",
        "origenImportacion": "Bioquimica OneDrive",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "titulo": "Fisica y Quimica 3: La materia su estructura y sus transformaciones",
        "nombreArchivo": "Fisica y Quimica 3-La materia su estructura y sus transformaciones.pdf",
        "autor": "Alejandro J. Balbiano",
        "origenId": "01MXVTLIOLMXDI4LMNVNAYMQDVTADYQQ7X",
        "estadoPortada": "pendiente"
    },
    {
        "carrera": "Bioquímica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDLg5aE2w1cSJFw8YJ0Dl__AcVBhqDTRSBhrwlA_OP-StA",
        "titulo": "Introduccion a la toxicologia",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "materia": "19. Toxicología",
        "origenId": "01MXVTLIOLQOLIJWYNLREJC4HRQJ2A4X77",
        "estadoPortada": "pendiente",
        "autor": "Desiree  Rodriguez Torrado",
        "nombreArchivo": "Introduccion a la toxicologia.Desiree-rodriguez-torrado.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "autor": "Jorde - Carey - Bamshed",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "estadoPortada": "pendiente",
        "origenId": "01MXVTLIONIYV2TAWN35GIT7S4KS5QGWPK",
        "nombreArchivo": "Genetica Medica Jorde 5a Edicion.pdf",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDNRiupgs3fTIn-XFS7A1nqAe5X-D8wANA682Y6zpeS9SE",
        "titulo": "Genetica Medica <span class=\"libro-edicion\">5° Edición</span>",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "materia": "21. Genética",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "origenImportacion": "Bioquimica OneDrive",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDP-AJO8PZjTKVxLbBaENxxAava0T49lFjtXy-Gu4Ld56g",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "Copia de Cálculo Diferencial e Integral - Tomo I - N. Piskunov - MIR.pdf",
        "autor": "N. Piskunov",
        "materia": "6. Cálcula Diferencial e Integral",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "titulo": "Cálculo Diferencial e Integral <span class=\"libro-edicion\">Tomo I</span>",
        "origenId": "01MXVTLIOP7ABE54HWMNGKK4JNWBNBBXDR",
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente"
    },
    {
        "titulo": "Química inorgánica básica",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "carrera": "Bioquímica",
        "nombreArchivo": "Química inorgánica.pdf",
        "autor": "Ernesto Delgado Fernández",
        "origenImportacion": "Bioquimica OneDrive",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDPifP3YsyPSIKRCtOiI1S6AeFhRCL0p9EGQ_rUuPK4ekk",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenId": "01MXVTLIOPRHZ7OYWMR5EIFEIK2ORCGVF2",
        "materia": "37. Quimica Inorganica",
        "estadoPortada": "pendiente"
    },
    {
        "origenId": "01MXVTLIOQTFC2RVG6E5GZIKY4VSPKQEZN",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDQmUWo1N4nTZQrHKyeqBMtAQVo0E8RcuEHn26sYDMB2iA",
        "nombreArchivo": "Fisiopatología y propedéutica quirúrgica.pdf",
        "materia": "11. Fisiopatología Humana",
        "carrera": "Bioquímica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente",
        "autor": "Autor Institucional",
        "titulo": "Fisiopatología y propedéutica quirúrgica <span class=\"libro-edicion\">3° Curso</span>",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Química Inorgánica en Portugués",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDQsQxZ-r5XRLdl5Jf_VclxAciOX46cF8qb4_QiBHo5RVw",
        "autor": "Chrispin KOWENJE",
        "nombreArchivo": "quimica-inorganica-i-portugues-chrispin-kowenje.pdf",
        "carrera": "Bioquímica",
        "origenId": "01MXVTLIOQWEGFT6V6K5CLOZPES77VLSLR",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "estadoPortada": "pendiente",
        "materia": "37. Quimica Inorganica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "autor": "Jack C. Richards",
        "titulo": "INTERCHANGE 2 <span class=\"libro-edicion\">4° Edición</span>",
        "materia": "15. Ingles Técnico",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "INTERCHANGE_2.pdf",
        "origenId": "01MXVTLIOT2IF73URYTJH22WW32NW7A6NI",
        "estadoPortada": "pendiente",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDT0gv90jiaT61a29Nt8HmoAShTCjt5IDvGZT42xTtlWko"
    },
    {
        "titulo": "Fisica General.",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "carrera": "Bioquímica",
        "nombreArchivo": "Fisica General. Ignacio Martin Bragado.pdf",
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "Ignacio Martin Bragado",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDToiEdm8j6QraGFoascFowAbZuHTebeB4vDU9MyqcD3Fo",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenId": "01MXVTLIOTUIQR3G6I7JBLNBQWQ2WHAWRQ",
        "estadoPortada": "pendiente",
        "materia": "34. Fisica"
    },
    {
        "nombreArchivo": "Expresion-Oral-y-Escrita-Libro-Base.pdf",
        "autor": "Galo Guerrero Jimenéz",
        "origenImportacion": "Bioquimica OneDrive",
        "estadoPortada": "pendiente",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDUO-N66jv_QZuHJndSjDmiAR9nbyx93ntxKHkPB9P6GOU",
        "titulo": "Expresion Oral y Escrita Libro Base",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "origenId": "01MXVTLIOUHPRXV2R375AZXBZGO5JIYONC",
        "materia": "7. Comunicación Oral y Escrita en Castellano"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDUXfAAgiZOSY_wFMWQttCsATBtmHee9g5TlkWdlQCiGwI",
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "Rolando Polo Collantes",
        "carrera": "Bioquímica",
        "materia": "4. Química General",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "titulo": "Química: Estado gaseoso",
        "nombreArchivo": "Química Estado gaseoso.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenId": "01MXVTLIOULXYABARGJZEY74AUYWILNUFM",
        "estadoPortada": "pendiente"
    },
    {
        "origenId": "01MXVTLIOV5O6BRFPJHVFZE6HVQIDPV7V5",
        "materia": "9. Histología Humana",
        "estadoPortada": "pendiente",
        "nombreArchivo": "Ross Histologia Texto y Atlas 7a Edicion.pdf",
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDV67wYlek9S5J49YIG-v69AZyuGpMwOE9biR-9G5c04PA",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Michael H. Ross y Wojciech Pawlina",
        "titulo": "Ross Histología Texto y Atlas: Correlación con Biología Molecular y Celular <span class=\"libro-edicion\">7ed</span>",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        }
    },
    {
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "titulo": "Tratado de Fisiologia Medica <span class=\"libro-edicion\">14° Edición</span>",
        "estadoPortada": "pendiente",
        "origenId": "01MXVTLIOV7LBTQHLGG5B2OAS2J763EZCC",
        "materia": "8. Fisiología Humana",
        "nombreArchivo": "Guyton y Hall Tratado de Fisiologia Medica.pdf",
        "carrera": "Bioquímica",
        "autor": "Guyton y Hall",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDV-sM4HWY3Q6cCWk_9smRCAaBhIHMXnx4CMPdTgdxREM8",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDVPkCK9rRETL9igXHT18FOATG4IJDECpDKnjGUTMZ6GKE",
        "nombreArchivo": "Tecnicas de separacion en quimica analitica.pdf",
        "autor": "Rafael Cela, Rosa Lorenzo y Carmen Casais",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "estadoPortada": "pendiente",
        "materia": "36. Quimica Analítica",
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Técnicas de Separación en Química Analítica",
        "carrera": "Bioquímica",
        "origenId": "01MXVTLIOVHZAIV5VUIRGL6YUBOHJ5PQKO"
    },
    {
        "autor": "Iciar Astiasarán Y J. Alfredo Martínez",
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLIOWKLD6DTEH6NE2TB7T3Q7WBBZV",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDWUsfhzIfzSamH89w_YIc1AVG8Ia_MzTGIOf1zPPz5SOs",
        "titulo": "Alimentos Composicion y Propiedades",
        "nombreArchivo": "Alimentos-Composicion-y-Propiedades.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "materia": "20. Bromatología y Bioquímica Nutricional",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "estadoPortada": "pendiente"
    },
    {
        "nombreArchivo": "Farmacologia Basica y Clinica - Velazquez - 18ava Edición.pdf",
        "origenId": "01MXVTLIOWOHGJ3JCGPFCL5YZAKIX7ERUJ",
        "estadoPortada": "pendiente",
        "titulo": "Farmacologia Basica y Clinica <span class=\"libro-edicion\">18° Edición</span>",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "autor": "Velazquez",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDWccydpEZ5RL7jIFIv8kaJAf-pvna_Faops-BC2M7qYK8",
        "carrera": "Bioquímica",
        "materia": "24. Farmacología",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "carrera": "Bioquímica",
        "nombreArchivo": "Enfermedades Infecciosas.pdf",
        "estadoPortada": "pendiente",
        "titulo": "Enfermedades Infecciosas <span class=\"libro-edicion\">10° Edicion</span>",
        "materia": "32. Parasitología",
        "autor": "CTO",
        "origenImportacion": "Bioquimica OneDrive",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "origenId": "01MXVTLIOXJCEEW7JG3NGJ7NB6XJIUPWRU",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDXSIhLfSbbTJ-0PrpRR9o0AbS_mjqLTj_2LjeNK1Qr3Hg"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "autor": "Stanley E. Manaham",
        "carrera": "Bioquímica",
        "materia": "35. Quimica Ambiental",
        "origenId": "01MXVTLIOXQ3U3VHGN7NH2356YNG253WYK",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDXhum6nM37T6332Gm13dsKAQJvChF2IWBnVeeLFzAiRjM",
        "titulo": "Introduccion a la quimica ambiental.",
        "nombreArchivo": "Introduccion a la quimica ambiental. Stanley e. Manahan.pdf",
        "origenImportacion": "Bioquimica OneDrive",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente"
    },
    {
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Geometria Analítica <span class=\"libro-edicion\">1° Edición</span>",
        "origenId": "01MXVTLIOYBWRZM3RLGRGYFG6BYVVTEDJU",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "nombreArchivo": "Geometria Analítica.pdf",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDYDaOWbis0TYKbwcVrMg00AQKlJntednbQK2SQZHl4tkc",
        "carrera": "Bioquímica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "RAICHMAN – TOTTER",
        "materia": "12. Geometría Analítica y Cálculo"
    },
    {
        "materia": "28. Clínica",
        "nombreArchivo": "Elaboracion_de_la_historia_clinica.pdf",
        "origenId": "01MXVTLIOYM5R7TOPGPFGLDAKTYIWKQJ3S",
        "autor": "Dr. Luis Fernando Bolaños Gil et al",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDYZ2P5ueZ5TLGBU8IsqCdyAU8oY6bVGCFDjxcdc0QXP2o",
        "titulo": "Elaboración de la historia clínica",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        }
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDYdf593Qi-Srcbj6iNijT5AY_yNJIThfX8wwHP8xir1fQ",
        "autor": "Ángel Herráez",
        "titulo": "Biologia Molecular e Ingeniería Genética",
        "origenId": "01MXVTLIOYOX7H3XIIXZFLOG4PVCGYUNHZ",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "2. Biología General",
        "nombreArchivo": "Texto Ilustrado de Biologia Molecular e Ingenieria Genetica.pdf"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "materia": "31. Metodología de Radiosótopos",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "ALFA",
        "carrera": "Bioquímica",
        "nombreArchivo": "El auge de los radiosótopos en medicina.pdf",
        "origenImportacion": "Bioquimica OneDrive",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDZEUG-GWnZRK1poSHVjIyKAVy7ApvfEjRjU9xrRMwxpXw",
        "titulo": "El auge de los radiosótopos en medicina",
        "origenId": "01MXVTLIOZCFA34GLJ3FCK22NBEHKYZDEK"
    },
    {
        "origenId": "01MXVTLIOZNBXGTZZXFBGLIZBMX3TQRAW3",
        "nombreArchivo": "Inmunologia Male 9a Edicion.pdf",
        "materia": "25. Inmunología",
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "titulo": "Inmunologia Male 9a Edicion",
        "autor": "David Male et al",
        "origenImportacion": "Bioquimica OneDrive",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDZaG5p5zcoTLRkLL7nCILbASasVbdCzAgxP-G10xq7rQ0",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        }
    },
    {
        "nombreArchivo": "Moore Fundamentos de Anatomia con Orientacion Clinica.pdf",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "titulo": "Moore Fundamentos de Anatomia con Orientacion Clinica",
        "estadoPortada": "pendiente",
        "autor": "Dalley - Agur",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDZjxYuCrHkRbmbjpGbFyg1AV0ZpK3PmXUKKpBm77tSjx4",
        "materia": "1. Anatomia Humana",
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLIOZR4LC4CVR4RC3TG4OSGNROKBV"
    },
    {
        "estadoPortada": "pendiente",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDZuDO2YDCxT6altrqD8HwGAW7i-xN4GKH37cSISIKQqwk",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "titulo": "Química <span class=\"libro-edicion\">3</span>",
        "origenId": "01MXVTLIOZXAZ3MYBQWFH2NJNWXKB7A7AG",
        "nombreArchivo": "Química (3).pdf",
        "carrera": "Bioquímica",
        "autor": "Ing. Joel Rojas Mendoza",
        "materia": "4. Química General",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "materia": "27. Hematología",
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "estadoPortada": "pendiente",
        "titulo": "Manual de Hematología <span class=\"libro-edicion\">12° EDICION</span>",
        "autor": "AMIR",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDZx3L4xWGnSZJtT3-IX4DAAZaKMMLcehmAgtj3TG9TH3Q",
        "nombreArchivo": "7. Manual de Hematología.pdf",
        "origenId": "01MXVTLIOZY5ZPRRLBU5EZE3KPP6EF7AGA"
    },
    {
        "titulo": "Química IV",
        "origenImportacion": "Bioquimica OneDrive",
        "estadoPortada": "pendiente",
        "origenId": "01MXVTLIP2YGHIZQQGNZF27PWW2XNH5QYG",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "nombreArchivo": "Química 4°.pdf",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQD6wY6MwgZuS6--1tXafsMGASj56i-V4hTTxspyH70R6aU",
        "carrera": "Bioquímica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Departamento Académico de la Editorial Ingenio",
        "materia": "4. Química General"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenId": "01MXVTLIP3MNDMCFKIFFDJEN6E3F4XXDAI",
        "titulo": "Altas de Alergia e Inmunología Clínica <span class=\"libro-edicion\">3ra Edición</span>",
        "origenImportacion": "Bioquimica OneDrive",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQD7Y0bBFUgpRpI3xNl5e4wIAZ4-bkKPSaN1gwIEJ1R0IKQ",
        "materia": "25. Inmunología",
        "nombreArchivo": "Altas de Alergia e Inmunología Clínica – Philip Fireman 3ra Edición.pdf",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "estadoPortada": "pendiente",
        "carrera": "Bioquímica",
        "autor": "Philip Fireman"
    },
    {
        "autor": "Socorro Fonseca et al",
        "origenImportacion": "Bioquimica OneDrive",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQD7ovPLGbdpTp-QWbfreGfIAcdEy98g-jUFIMU0Yfhcr4M",
        "titulo": "comunicacion oral y escrita",
        "carrera": "Bioquímica",
        "nombreArchivo": "comunicacion oral y escrita.pdf",
        "origenId": "01MXVTLIP3ULZ4WGNXNFHJ7ECZW7VXQZ6I",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente",
        "materia": "7. Comunicación Oral y Escrita en Castellano",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        }
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQD9-fxl44l6T6CF0E3SGT9wAaOH4FOe6UhuJPe84a_Z2S0",
        "estadoPortada": "pendiente",
        "autor": "Francis A. Carey y  Robert M. Guiliano",
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLIP57H6GLY4JPJH2BBOQJXJBSP3Q",
        "carrera": "Bioquímica",
        "materia": "39. Quimica Organica",
        "nombreArchivo": "Quimica Organica Carey 9a Edicion.pdf",
        "titulo": "Química Orgánica <span class=\"libro-edicion\">9ed</span>",
        "fechaImportacion": {
            "seconds": 1792413003,
            "nanoseconds": 226000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQD9Rz1gh4MoSLgNf5XuUiU6AblFGxvErwSsJ6gxjrIJOBw",
        "carrera": "Bioquímica",
        "titulo": "Guía para el Diagnóstico Clínico",
        "materia": "28. Clínica",
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "James Morrison",
        "origenId": "01MXVTLIP5I46WBB4DFBELQDL7SXXFEJJ2",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "Guía para el Diagnóstico Clínico-James Morrison.pdf"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQD-kguAsPO-SL6IoD8RzBmoARYdI6whbShWIom1GmlqZ9E",
        "autor": "Swokowski",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "origenId": "01MXVTLIP6SIFYBMHTXZEL5CFAH4I4YGNI",
        "materia": "12. Geometría Analítica y Cálculo",
        "origenImportacion": "Bioquimica OneDrive",
        "estadoPortada": "pendiente",
        "nombreArchivo": "Cálculo con Geometría Analítica - Swokowski.pdf",
        "titulo": "Cálculo con Geometría Analítica",
        "carrera": "Bioquímica"
    },
    {
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "Manual Washington",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQD__dnmMBzKQYxoLnvJVoMNAajMULQH8lzK_GAHsxzB7Sk",
        "carrera": "Bioquímica",
        "materia": "28. Clínica",
        "titulo": "Especialidades clinicas Enfermedades Infecciosas <span class=\"libro-edicion\">2° Edición</span>",
        "origenId": "01MXVTLIP77XM6MMA4ZJAYY2BOPPEVNAYN",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "nombreArchivo": "Manual_Washington_de_especialidades_clinicas_Enfermedades_Infecciosas.pdf"
    },
    {
        "carrera": "Bioquímica",
        "titulo": "Farmacología Rios 2 - Editorial Sketch Med 2023",
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLIP7KTWQGIU37FCLC5FVZMHOPKPH",
        "materia": "24. Farmacología",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQD_VO0DIpv5RLF0tcsO56nnAed0ealAnmzHO1MQc9fwNvc",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "Farmacología Rios 2 - Editorial Sketch Med 2023.pdf",
        "autor": "Dr. Paola Ríos"
    },
    {
        "origenId": "01MXVTLIPALQIDJALTLJAK2CFURWT3XCJY",
        "materia": "34. Fisica",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "carrera": "Bioquímica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDgXBA0gXNaQK0ItI2nu4k4AQ5M1zAbXFUIc9HC50AP7I0",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Juan Guillermo Rivera Berrio",
        "estadoPortada": "pendiente",
        "titulo": "Fisica <span class=\"libro-edicion\">Volumen I</span>",
        "nombreArchivo": "Fisica Volumen I. Juan Guillermo Rivera Berrio.pdf",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDhMKCYPOuaQr0XC6MHgph7AaQeQHsQL6ZXBQyQrUXcS-E",
        "autor": "Roberto Hernandez Sampieri",
        "nombreArchivo": "metodologia_de_la_investigacion_-_roberto_hernandez_sampieri.pdf",
        "origenImportacion": "Bioquimica OneDrive",
        "estadoPortada": "pendiente",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "titulo": "metodologia de la investigacion v <span class=\"libro-edicion\">6° Edición</span>",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "origenId": "01MXVTLIPBGCQJQPHLTJBL2FYLUMDYFGD3",
        "materia": "26. Metodología de la Investigación"
    },
    {
        "origenId": "01MXVTLIPBUEWEAO36ARGLO2GJXQOG6VCZ",
        "nombreArchivo": "Quimica la Ciencia Central Brown 9°ed..pdf",
        "materia": "4. Química General",
        "carrera": "Bioquímica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente",
        "titulo": "Química la Ciencia Central <span class=\"libro-edicion\">9ed</span>",
        "origenImportacion": "Bioquimica OneDrive",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDhoSxAO34ETLdoybwcb1RZAQxbALABQT6PEIca2R0t0Qo",
        "autor": "Theodore L. Brown, H. Eugene LeMay, Jr., Bruce E. Bursten y Julia R. Burdge",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        }
    },
    {
        "nombreArchivo": "Introduccion a la biologia celular 5a Edicion.pdf",
        "carrera": "Bioquímica",
        "titulo": "Introduccion a la biologia celular <span class=\"libro-edicion\">5° Edición</span>",
        "origenId": "01MXVTLIPCJH5P6Y5EP5AIR44MZG5O5RJA",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "materia": "2. Biología General",
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Alberts et al",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDiSfr_Y6R_QIjzjMm67sUgAVFhMz2EIIyA8SYMWK30Ax0"
    },
    {
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "origenId": "01MXVTLIPDF37TKMQUO5EKVB7GKLNW4CMX",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDjLv81MhR3SKqH5lLbbgmXAZrSW_WUx-CVNSnBEuPYk2M",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Leithold Louis",
        "materia": "12. Geometría Analítica y Cálculo",
        "estadoPortada": "pendiente",
        "titulo": "El Cálculo <span class=\"libro-edicion\">7° Edición</span>",
        "origenImportacion": "Bioquimica OneDrive",
        "nombreArchivo": "Leithold Louis – El Cálculo (7ed 1380 Pag) ( PDFDrive ).pdf",
        "carrera": "Bioquímica"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDjQERzkD2aQ4UzUs-dO-EeAc4eqTN7VHY35B4oRaEN_cU",
        "nombreArchivo": "BIOLOGIA_CELULAR_Y_MOLECULAR_9NA_EDICION.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Junqueira - Carneiro",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "estadoPortada": "pendiente",
        "materia": "2. Biología General",
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "BIOLOGIA CELULAR Y MOLECULAR <span class=\"libro-edicion\">9NA EDICION</span>",
        "origenId": "01MXVTLIPDIBCHHEB5TJBYKM2SZ6OTXYI6",
        "carrera": "Bioquímica"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDjVTC-WGn1SauAknhfgvOhARZrsvy4nv5q4Ju-N1CLMUM",
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "Eduardo Adrián Pró",
        "titulo": "Anatomia clinica <span class=\"libro-edicion\">1ra edicion</span>",
        "nombreArchivo": "Anatomia clinica de pro 1ra edicion.pdf",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "materia": "28. Clínica",
        "estadoPortada": "pendiente",
        "origenId": "01MXVTLIPDKUYL4WDJ6VE2XAESPBPYF45B"
    },
    {
        "nombreArchivo": "Goodman & Gilman. Las Bases Farmacologicas de la Terapeutica 13a Edicion_booksmedicos.org.pdf",
        "autor": "Goodman & Gilman",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDjmIro-_b7Q60mdymVrDLGARyKNPomLxgZAwGn66qesWU",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Las Bases Farmacologicas de la Terapeutica <span class=\"libro-edicion\">13° Edicion</span>",
        "origenId": "01MXVTLIPDTCFOR67W7NB22JTXFGK2YMWG",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "materia": "24. Farmacología"
    },
    {
        "origenId": "01MXVTLIPE2MWODZJWVFHJA5SNUOZMUACO",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "titulo": "Química para Dummies",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDk0yzh5TapTpB2TaOyygBOAdpVEddJU_Gz_FM6IvZho2o",
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "4. Química General",
        "carrera": "Bioquímica",
        "autor": "John T. Moore",
        "nombreArchivo": "Química para Dummies.pdf"
    },
    {
        "origenId": "01MXVTLIPGDFJ65O3J7VDLPNF3Y2VYZF5D",
        "autor": "Jennifer Hincapié Sánchez y María de Jesús Medina Arellan",
        "origenImportacion": "Bioquimica OneDrive",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente",
        "nombreArchivo": "Bioética- teorías y principios.pdf",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDmGVPuu2n9Rre0u8arjJejAWEjANI6uzJmBRcW-HA7_Rw",
        "materia": "10. Ética y Bioética",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "carrera": "Bioquímica",
        "titulo": "Bioética: teorías y principios"
    },
    {
        "estadoPortada": "pendiente",
        "titulo": "Metodología de la Investigación y Principios en Publicación Científica",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "nombreArchivo": "Metodología de la Investigación y Principios en Publicación Científica.pdf",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDnhxx58dzZQ5BYHs0nYVKMAVTPVxZu4yD8g87vOKNQBQs",
        "carrera": "Bioquímica",
        "autor": "Charry - Parra",
        "origenId": "01MXVTLIPHQ4OHT4O43FBZAWA6ZUTWCUUM",
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "26. Metodología de la Investigación",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "nombreArchivo": "Química Biológica para las Ciencias Médicas.pdf",
        "titulo": "Química Biológica para las Ciencias Médicas: Textos & Vídeos",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDoRgcBhmJPSbTh1a6d1lKnAROjJNrNMieTUvBI8pO1vc4",
        "materia": "17. Fisicoquímica",
        "origenId": "01MXVTLIPIIYDQDBTCJ5E3JYOVV2O5MUVH",
        "carrera": "Bioquímica",
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "Alfredo Rigalli (et al)",
        "estadoPortada": "pendiente"
    },
    {
        "origenId": "01MXVTLIPIN6TPXYKDBFBLBPYGR6J66SXF",
        "autor": "Silvia Calderón et al",
        "origenImportacion": "Bioquimica OneDrive",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "Fisico Quimica I Serie Nuevas Miradas.pdf",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDob6b74UMJQrC_Bo-T70rlAej7DrnvRIJoH6BLSMbO7hQ",
        "materia": "17. Fisicoquímica",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "carrera": "Bioquímica",
        "titulo": "Fisico Quimica I"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDpEaFTTO4sRbvKzBOcdI9gAcCgrdfYuACxintjZ0MNdug",
        "materia": "25. Inmunología",
        "carrera": "Bioquímica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "origenId": "01MXVTLIPJCGQVGTHOFRC3XSWMCOOHJD3A",
        "nombreArchivo": "Inmunologia. Biologia y patologia del sistema inmunitario 5a Edicion.pdf",
        "titulo": "Inmunologia: Biologia y patologia del sistema inmunitario <span class=\"libro-edicion\">5° Edición</span>",
        "autor": "Regueiro Gonzales et al",
        "origenImportacion": "Bioquimica OneDrive",
        "estadoPortada": "pendiente"
    },
    {
        "materia": "17. Fisicoquímica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Rodhe Ester Moncada Muñoz y  Carlos Federico Márquez",
        "carrera": "Bioquímica",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "origenImportacion": "Bioquimica OneDrive",
        "estadoPortada": "pendiente",
        "titulo": "Física:  Ciencias Naturales",
        "origenId": "01MXVTLIPKIB6QYAQKYRGZ7SGJQQZ3I44S",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDqQH0MAgrETZ_IyYQztHOSAWFdj3paMep1Y-SE4jk3n24",
        "nombreArchivo": "Física Ciencias Naturales.pdf"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente",
        "materia": "6. Cálcula Diferencial e Integral",
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "autor": "Purcell-Varberg-Rigdon",
        "nombreArchivo": "Cálculo diferencial e inegral. 9º ed. Purcell.pdf",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDt2U2bMv1lTYpJSjG-ONOiAVe1brHzDnRL4q4JrZiRYLs",
        "origenId": "01MXVTLIPN3FGZWMX5MVGYUSKKGG7DRU5C",
        "fechaImportacion": {
            "seconds": 1792412977,
            "nanoseconds": 880000000
        },
        "titulo": "Cálculo diferencial e inegral. 9º ed. Purcell <span class=\"libro-edicion\">9ed</span>"
    },
    {
        "origenId": "01MXVTLIPNB5QXJYAZWVA2MAZJ4URD6V2W",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "nombreArchivo": "Folleto cepre uni Quimica 5.pdf",
        "materia": "4. Química General",
        "carrera": "Bioquímica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente",
        "titulo": "Folleto cepre uni Quimica 5",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDtD2F04Bm1QaYDKeUiP1dWAV9i10QPGWuwJfRmKz02a-o",
        "autor": "Pror. Joel K. Rojas Mendonza",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenImportacion": "Bioquimica OneDrive",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDtifc03PzsQbESLn96AhB7AZzETwoTzx-ZIv4786EbKuo",
        "autor": "S/A",
        "origenId": "01MXVTLIPNRH3TJXH45RA3CEROP55AEED3",
        "nombreArchivo": "Avañe´ê-Diccionario-Guarani-Esp-Guarani.pdf",
        "materia": "13. Comunicación Oral y Escrita Guaraní",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "titulo": "Avañe´ê del Taragui <span class=\"libro-edicion\">DICCIONARIO GUARANI-ESPAÑOL</span>",
        "carrera": "Bioquímica"
    },
    {
        "titulo": "Anatomía Humana <span class=\"libro-edicion\">4 Edición - Tomo 1</span>",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "origenId": "01MXVTLIPO5CJOQP7YCFHLEE5IF4R72QOC",
        "carrera": "Bioquímica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDu6JLoP_gRTrITqC8j_UHCAU_SrKh-37Dky16UMuOjJnw",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "LATARJET Anatomía Humana 4a Ed - Tomo 1.pdf",
        "origenImportacion": "Bioquimica OneDrive",
        "autor": "Latarjet - Ruiz Liard",
        "materia": "1. Anatomia Humana"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDuAggvxZhEQInr1Eal4180AahCuZMAbI3kGXqcp-7HkBE",
        "materia": "3. Metodología de Estudio",
        "origenId": "01MXVTLIPOAIEC7RMYIRAIT26UI2S6GXZU",
        "carrera": "Bioquímica",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "estadoPortada": "pendiente",
        "titulo": "Manual tecnicas de estudio",
        "autor": "Autor Institucional",
        "nombreArchivo": "Manual tecnicas de estudio.pdf",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDv02BbIqUNRaa9rBPPU1s2AXgNOEpcQtkPXzg2xjD_EBw",
        "autor": "CÉSAR LACRUZ PELEA y JULIANA FARIÑA GONZÁLEZ",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "titulo": "Citologia ginecologica. De Papanicolau a Bethesda",
        "origenImportacion": "Bioquimica OneDrive",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "nombreArchivo": "Citologia ginecologica. De Papanicolau a Bethesda.pdf",
        "estadoPortada": "pendiente",
        "materia": "14. Citología Clínica",
        "origenId": "01MXVTLIPP2NQFWIVFBVC2NPNMCPHVGWZW"
    },
    {
        "carrera": "Bioquímica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDx1t0VFxP4TI6Xnqmo0c5rAacm-eu5Q7ynKQmQ4xkq2Xk",
        "titulo": "Biologia IV <span class=\"libro-edicion\">4°</span>",
        "estadoPortada": "pendiente",
        "nombreArchivo": "Biologia IV- Martin Diaz.pdf",
        "materia": "2. Biología General",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "autor": "Martin Díaz et al",
        "origenId": "01MXVTLIPR23ORKFYT7BGI5F46VGUNDTTL",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "origenImportacion": "Bioquimica OneDrive"
    },
    {
        "carrera": "Bioquímica",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "titulo": "Fisica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDxI8SbvkDCSIDwPWQVMbOSAfMSSVCrDI_rJCl7ObfPgOU",
        "materia": "34. Fisica",
        "autor": "S/A",
        "estadoPortada": "pendiente",
        "origenId": "01MXVTLIPREPCJXPSAYJEIB4B5MQKTDM4S",
        "nombreArchivo": "Fisica Ministerio de Educacion Ecuador.pdf",
        "origenImportacion": "Bioquimica OneDrive",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "Autor Institucional",
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "materia": "13. Comunicación Oral y Escrita Guaraní",
        "origenId": "01MXVTLIPSMFNMF54LGVGZQB5RQQNHZ54L",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQDyYVrC94s1TZgHsYQafPeLAfAoqqTRrz0xpgQ3EtuxI98",
        "titulo": "KALO: Guarani Digital",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "fechaImportacion": {
            "seconds": 1792412979,
            "nanoseconds": 482000000
        },
        "nombreArchivo": "KALO-Guarani-Digital.pdf"
    },
    {
        "autor": "Dr. Roberto A. Gonzalez-Castellanos",
        "origenImportacion": "Bioquimica OneDrive",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQD01ruL7t64Q6XCnWTAP2ChAUSIl7O28Ef7SIHO4cq5yVg",
        "titulo": "Introducción a la Biotecnología <span class=\"libro-edicion\">2018</span>",
        "origenId": "01MXVTLIPU225YX3W6XBB2LQU5MTAD6YFB",
        "nombreArchivo": "Conferencia Introduc. Biotecnología (09-06-2018).pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente",
        "materia": "23. Biotecnología",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        }
    },
    {
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "materia": "20. Bromatología y Bioquímica Nutricional",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQD1117AtTzvQbpfiXhQhEi-AVWDyooLwBybG2VP1Oo9_Eo",
        "origenId": "01MXVTLIPV25PMBNJ455A3UX4JPBIIISF6",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "S/A",
        "carrera": "Bioquímica",
        "estadoPortada": "pendiente",
        "origenImportacion": "Bioquimica OneDrive",
        "nombreArchivo": "Bromatología y técnicas culinarias.pdf",
        "titulo": "Bromatología y técnicas culinarias"
    },
    {
        "materia": "4. Química General",
        "autor": "Navarro - Pérez",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQD1_MTcXFpwQ5NpPpT8JbaVATS9rrGta8UNNt8o3lUep2Y",
        "carrera": "Bioquímica",
        "nombreArchivo": "Manual de quimica de las disoluciones.pdf",
        "origenId": "01MXVTLIPV7TCNYXC2OBBZG2J6ST6CLNUV",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "origenImportacion": "Bioquimica OneDrive",
        "titulo": "Manual de quimica de las disoluciones <span class=\"libro-edicion\">2° Edición</span>",
        "estadoPortada": "pendiente"
    },
    {
        "titulo": "Biología Celular e Histología <span class=\"libro-edicion\">7ed</span>",
        "autor": "Leslie P. Gartner y James L. Hiatt",
        "nombreArchivo": "Serie RT Biologia Celular e Histologia 7a Edicion.pdf",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Bioquímica",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQD2FZm4eVmKSYUYkgu0NzGkAc9H1GBuilMgqaQ6Ip-Sh44",
        "materia": "2. Biología General",
        "fechaImportacion": {
            "seconds": 1792412976,
            "nanoseconds": 965000000
        },
        "origenImportacion": "Bioquimica OneDrive",
        "origenId": "01MXVTLIPWCWM3Q6KZRJEYKGESBO2DOMNE",
        "estadoPortada": "pendiente"
    },
    {
        "carrera": "Bioquímica",
        "titulo": "Neuroinmunología Clínica",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "origenImportacion": "Bioquimica OneDrive",
        "materia": "25. Inmunología",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQD2Kpi7iGyoRrSgX0qHUaWsAcYar5kkQpnTNYrmI76xc0A",
        "estadoPortada": "pendiente",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "nombreArchivo": "Neuroinmunologia Clinica - Correale.pdf",
        "origenId": "01MXVTLIPWFKMLXCDMVBDLJIC7JKDVDJNM",
        "autor": "Jorge Correale"
    },
    {
        "autor": "luis miguel bastante quijano y salvador gonzalez lopez",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQD3W9GLt5YrSIZu5znyuchPASlS6DzcNfYrGK8p52RLVZ4",
        "origenId": "01MXVTLIPXLPIYXN4WFNEIM3XHHHZLTSCP",
        "titulo": "fundamentos de biotecnologia medica y biotecnologia molecular",
        "nombreArchivo": "fundamentos-de-biotecnologia-medica-y-biotecnologia-molecular-luis-miguel-bastante-quijano-y-salvador-gonzalez-lopez.pdf",
        "fechaImportacion": {
            "seconds": 1792412981,
            "nanoseconds": 912000000
        },
        "origenImportacion": "Bioquimica OneDrive",
        "carrera": "Bioquímica",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "materia": "23. Biotecnología",
        "estadoPortada": "pendiente"
    },
    {
        "origenId": "01MXVTLIPYVFAE2KYJCFB3QJ76AFR5USTT",
        "fechaImportacion": {
            "seconds": 1792412995,
            "nanoseconds": 70000000
        },
        "origenImportacion": "Bioquimica OneDrive",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "titulo": "La nueva clínica",
        "estadoPortada": "pendiente",
        "materia": "28. Clínica",
        "carrera": "Bioquímica",
        "autor": "Alberto Lifshitz",
        "nombreArchivo": "La-nueva-clinica.pdf",
        "link": "https://unidaedupy-my.sharepoint.com/:b:/g/personal/bibliotecacdeunida_unida_edu_py/IQD4qUBNKwkRQ7gn_gFj2kpzAYoPbfBsheZBu11FllHeupc"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "autor": "I. Suvorov",
        "titulo": "Matemáticas Superiores",
        "link": "https://drive.google.com/file/d/1lTxx61yuSc0ZwZSOIfAGAgsFN-ch5bSb/view?usp=sharing",
        "carrera": "Ingeniería en Informática"
    },
    {
        "autor": "O. C. Ferrell, Michael D. Hartline",
        "titulo": "Estrategia de marketing <span class=\"libro-edicion\">5 ed</span>",
        "carrera": "Marketing y Gestión Comercial",
        "link": "https://drive.google.com/file/d/1nufghiwTNq0PG3C51RiPYQDhCKR0SuHZ/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1AFwZ0zYisunI7aKKDdQRIm6mL8tEnoAm/view",
        "autor": "Dr. Fernando Quiroz Gutiérrez",
        "titulo": "Anatomía Humana Quiroz <span class=\"libro-edicion\">TOMO 2</span>",
        "carrera": "Medicina"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "Roger J. Best",
        "carrera": "Marketing y Gestión Comercial",
        "link": "https://drive.google.com/file/d/1tDvULaEikY4u4bxfsw6v-3ouqH0q1rXc/view?usp=sharing",
        "titulo": "Marketing estratégico"
    },
    {
        "titulo": "La tecnología educativa al servicio de la educación tecnológica",
        "carrera": "Marketing y Gestión Comercial",
        "link": "https://drive.google.com/file/d/1xqLESiup-reqH3X0BOIP_e7FCAbY6el9/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "Uriel Rubén Cukierman, José María Virgili"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "carrera": "Administración de Empresas",
        "link": "https://drive.google.com/file/d/1BJgSfNSKFFmR8cXH5ZFAxnCi3mZlrRFX/view?usp=sharing",
        "titulo": "El arte de gestionar conflictos en la vida y en la empresa: El método Nonflict",
        "autor": "AMIR KFIR y STEPHEN HECHT"
    },
    {
        "titulo": "LEY 716: DELITOS CONTRA EL MEDIO AMBIENTE",
        "link": "https://docs.google.com/document/d/1rhRd2-n0s7yEEDGBrJnuin69y3RkHWIQ/edit?usp=sharing&ouid=111681295415760948313&rtpof=true&sd=true",
        "carrera": "Derecho",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "autor": "CONGRESO DE LA NACION PARAGUAYA"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "titulo": "Estadística para la administración y los negocios",
        "autor": "Carlos Véliz Capuñay",
        "carrera": "Ingeniería en Informática",
        "link": "https://drive.google.com/file/d/1yOw8h3HmoYWeyv0baY6xQSilse2WyD-G/view?usp=sharing"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80",
        "autor": "Laura Beatriz López, Marta María Suarez",
        "titulo": "FUNDAMENTOS DE NUTRICIÓN NORMAL",
        "link": "https://drive.google.com/file/d/1LIHGysvhsm6akmqyBzxdwsLUyd5jIw_f/view?usp=sharing",
        "carrera": "Nutrición"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "carrera": "Derecho",
        "autor": "CÁMARA DE REPRESENTANTES DE LA NACIÓN PARAGUAYA",
        "titulo": "LEY No. 854/63: EL ESTATUTO AGRARIO",
        "link": "https://docs.google.com/document/d/1FgVD7wLaH2bHzeSTuv8nO9UznXC8Q_RS/edit?usp=sharing&ouid=111681295415760948313&rtpof=true&sd=true"
    },
    {
        "titulo": "Problemas y Experimentos Recreativos",
        "link": "https://drive.google.com/file/d/1UR0WcMzkvoBgtGSZWUELninIC2Ot39Mr/view?usp=sharing",
        "carrera": "Ingeniería en Informática",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "autor": "Ya. I. Perelmán"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/16qxa2Sgdhw9NlHewrARTbeVMDpKREFw2/view?usp=sharing",
        "titulo": "Marketing Internacional de lugares y destinos",
        "carrera": "Marketing y Gestión Comercial",
        "autor": "PHILIP KOTLER, DAVID GERTNER, IRVING REIN, DONALD HAIDER"
    },
    {
        "autor": "Mel Wilcox",
        "carrera": "Medicina",
        "titulo": "Atlas de Endoscopia Gastrointestinal <span class=\"libro-edicion\">2ª EDICIÓN</span>",
        "link": "https://drive.google.com/file/d/1jgHq--rq0R9JMAtBHSFvZmQnlGv9KceZ/view",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "titulo": "Anatomía Humana: Descriptiva <span class=\"libro-edicion\">PARTE 2</span>",
        "link": "https://drive.google.com/file/d/1FT-jQN_hQ-CIGEGpYMeNp_qL-yzFh7Yb/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=300&q=80",
        "carrera": "Medicina",
        "autor": "Henri Rouvière, André Delmas"
    },
    {
        "link": "https://drive.google.com/file/d/1FfbeSQLIWrYcgr3xGyg8zhjDiN-NUEBp/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "carrera": "Administración de Empresas",
        "titulo": "MBA en 10 días: Guía paso a paso con las enseñanzas de las mejores escuelas de negocios del mundo",
        "autor": "STEVEN SILBIGER"
    },
    {
        "link": "https://drive.google.com/file/d/1xxkFUou_9FdMpU4AUNY9txhgWXhz976w/view?usp=sharing",
        "carrera": "Derecho",
        "titulo": "ETNOLOGÍA Y UTOPIA",
        "autor": "GUSTAVO BUENO",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1HiRBFxCWJTka4WowjlqvBsm8rexdC1bW/view?usp=sharing",
        "titulo": "Introducción a los negocios y su gestión",
        "carrera": "Administración de Empresas",
        "autor": "César Camisón Zornoza, Juan Ignacio Dalmau Porta  (Coord.)"
    },
    {
        "link": "https://drive.google.com/file/d/1PwBnDOxtNKLYq0Yx29GmMI08Rva5cvnm/view?usp=sharing",
        "carrera": "Ingeniería en Informática",
        "titulo": "División de un Segmento en la Razón Dada",
        "autor": "N. M. Beskin",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80"
    },
    {
        "carrera": "Enfermería",
        "titulo": "Diccionario y glosario enfermería: Ingles-Español",
        "autor": "Lic. Ignacio López Corría y Lic. Idelfonso Torres",
        "link": "https://drive.google.com/file/d/1CQpI8AgHR7k1guYzzPEKF_Oxj4Q5gvm6/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/17SUAWPqiODROzbmlcgAR8v9H0qp9EGtE/view?usp=sharing",
        "titulo": "Fármacos antianémicos y factores de crecimiento hemopoyético",
        "autor": "J. Flórez",
        "carrera": "Enfermería",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "FERNANDO LAFUENTE",
        "titulo": "Aspectos del comercio exterior",
        "carrera": "Administración de Empresas",
        "link": "https://drive.google.com/file/d/1nDNsXJO1XUrUyY586EqhiigD-kObeZch/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/1mwoCj9Q9P3t3EiWRT_BCIqRO7-QCyMJW/view?usp=sharing",
        "autor": "J. Tamargo y C. Valenzuela",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Enfermería",
        "titulo": "Fármacos antiarrítmicos"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "titulo": "PROBABILIDAD Y ESTADÍSTICA II",
        "autor": "Ing. Yohanna Lucía Rocha Meza",
        "link": "https://drive.google.com/file/d/1M_sHS18615grY_woN3DEIkapiKPCP5od/view?usp=sharing",
        "carrera": "Marketing y Gestión Comercial"
    },
    {
        "autor": "Ing. Ricardo Duarte",
        "carrera": "PPT",
        "imagen": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
        "titulo": "Colección de Literaria 2026",
        "link": "https://docs.google.com/presentation/d/1Aq6_ViXU1TPX595wwJ-F_2ovU9LUcNmq/edit?usp=sharing&ouid=117053729487037923615&rtpof=true&sd=true"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1Ev6p6xq0etktsRdLbeMxdOJl7a4UsXyR/view?usp=sharing",
        "carrera": "Ingeniería en Informática",
        "titulo": "Álgebra Extraordinaria",
        "autor": "I. M. Yaglom - MIR"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1MIQrRgj_7hYdOL_zwj_XTDMQu5nLsb4d/view?usp=sharing",
        "carrera": "Administración de Empresas",
        "titulo": "FUNDAMENTOS DE ADMINISTRACIÓN: Teoría general y proceso administrativo",
        "autor": "Antonio Cesar Amaru Maximiano"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ciencias Políticas",
        "autor": "S/A",
        "link": "https://drive.google.com/file/d/1NRhpocT8cQIY4oGoFOVI7Fwe-NAo1PA0/view?usp=sharing",
        "titulo": "ARTÍCULO Entorno de los Negocios Internacionales"
    },
    {
        "titulo": "La noción de derecho económico",
        "carrera": "Administración de Empresas",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "autor": "Revista de Derecho",
        "link": "https://drive.google.com/file/d/1CrZnvrhTIAZgeRq4yr_yade98clFnB7R/view?usp=sharing"
    },
    {
        "carrera": "Enfermería",
        "titulo": "Farmacología de la motilidad del aparato digestivo",
        "link": "https://drive.google.com/file/d/1Ku4ovoXINo5_i8Xq0weYl0gGRQIHTho4/view?usp=sharing",
        "autor": "J. Flórez y J. V. Esplugues",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "titulo": "ROBBINS Patología Humana <span class=\"libro-edicion\">8VA EDICIÓN</span>",
        "autor": "Kumar, Abbas, Fausto",
        "carrera": "Medicina",
        "link": "https://drive.google.com/file/d/1lzPUehewtRX75mEZ_R56MpqBryKqSzYo/view",
        "imagen": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "Dennis P. Petri",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1BsptxmeecIJe1-3WWpF4KDPoug8nyCxU/view?usp=sharing",
        "titulo": "Negociación Internacional en América Latina",
        "carrera": "Relaciones Internacionales"
    },
    {
        "autor": "Don R. Hansen, Maryanne M. Mowen",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1Emxljkx9IzEYytQBguASkRXcZqF5-xx6/view?usp=sharing",
        "carrera": "Administración de Empresas",
        "titulo": "Administración  de costos: Contabilidad y control <span class=\"libro-edicion\">5 ed</span>"
    },
    {
        "carrera": "Marketing y Gestión Comercial",
        "titulo": "Marketing digital: Guía básica para digitalizar tu empresa",
        "autor": "Josep M. Martínez Polo, Jesús Martínez Sánchez, M. Concepción Parra Meroño",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1OU2vr_KhjBwHr4mIKn3WEOGt0EvSN7H9/view?usp=sharing"
    },
    {
        "autor": "P.E. Dankó y otros",
        "titulo": "Matemáticas Superiores en Ejercicios 2",
        "carrera": "Ingeniería en Informática",
        "link": "https://drive.google.com/file/d/1xtKspiX5wyBx0ftlIFnmAodhx_iBKgFP/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/1Sm0Ln0KcF-9RfgVYo4dSnfClo10fL0uv/view?usp=sharing",
        "carrera": "Marketing y Gestión Comercial",
        "titulo": "Comunicación e imagen corporativa",
        "autor": "Ana Isabel Jiménez Zarco, Inma Rodríguez Ardura",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "titulo": "Matemáticas Avanzadas para Ingeniería <span class=\"libro-edicion\">2DA EDICIÓN</span>",
        "carrera": "Ingeniería en Informática",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "autor": "Glyn James",
        "link": "https://drive.google.com/file/d/10Z6IebFCfm6kyMMigI-1QMhbuUmHWpqG/view?usp=drive_link"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1559757175-5700efe6732a?auto=format&fit=crop&w=300&q=80",
        "autor": "Marios Loukas",
        "titulo": "GRAY Guía Fotográfica de Disección",
        "link": "https://drive.google.com/file/d/19Nxq3NuHLeLMfe6drGR32Ck8zpyh-n27/view",
        "carrera": "Medicina"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1Kd7AlLG-ZT42Vg7f0t7iv6ZN-OVNCHJw/view?usp=sharing",
        "titulo": "Negocios en el Paraguay: Elementos del Costo País",
        "carrera": "Administración de Empresas",
        "autor": "Ministerio de Industria y Comercio y Organización de las Naciones Unidas para el Desarrollo Industrial (ONUDI)"
    },
    {
        "autor": "Sergio ÁLvarez Ducoing",
        "titulo": "Jungla Empresarial",
        "link": "https://drive.google.com/file/d/1kWEYcfRAFESxqlLzrvzda2oq9cip3b5x/view?usp=sharing",
        "carrera": "Contaduría Pública",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "William B. Werther Jr. y Keith Davis",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1dOUYfrWxe83gZeKUYn87nSptAOdUc6zV/view?usp=sharing",
        "carrera": "Marketing y Gestión Comercial",
        "titulo": "Administración del personal y recursos humanos <span class=\"libro-edicion\">5 ed</span>"
    },
    {
        "carrera": "Contaduría Pública",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1qaEmZANdcURzlUFMMl3YJ7HLOynbR8rk/view?usp=sharing",
        "titulo": "LA  CIENCIA CONTABLE: FUNDAMENTOS CIENTÍFICOS Y METODOLÓGICOS",
        "autor": "ROBERTO GÓMEZ LÓPEZ"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Comercio Internacional",
        "link": "https://drive.google.com/file/d/1x3C98lwYaN9_Jws5mXIseSowMBt0_Ww7/view?usp=sharing",
        "titulo": "LA TEORÍA DEL DINERO Y DEL CRÉDITO",
        "autor": "LUDWIG VON MISES"
    },
    {
        "autor": "Agatha Christie",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1xUKhPQDZx8qX2XdJ9UIzRoZRBnjbddsr/view?usp=sharing",
        "titulo": "Diez negritos",
        "carrera": "Comercio Internacional"
    },
    {
        "link": "https://drive.google.com/file/d/1BPktOCkpJct0rPN55CCjfekHtiXewBDN/view?usp=sharing",
        "autor": "P.E. Dankó y otros",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería en Informática",
        "titulo": "Matemáticas Superiores en Ejercicios 1"
    },
    {
        "link": "https://drive.google.com/file/d/1HJJn68ld6jTkZ1wn3WC0a983aSYYJWHu/view",
        "titulo": "Grant Anatomía para Colorear",
        "autor": "Nicole R. Herring",
        "carrera": "Medicina",
        "imagen": "https://images.unsplash.com/photo-1583947215259-38e31be0b51f?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1WIejhuSSV1DwzpX_-NXd5bL5agpHn_E3/view?usp=sharing",
        "titulo": "Proyección Estereográfica",
        "autor": "B. A. Rosenfeld - N. D. Sergeeva",
        "carrera": "Ingeniería en Informática"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "autor": "A. Efimov - B. Demidovich",
        "link": "https://drive.google.com/file/d/1GGqVtITmp6E9OfYdDwLUvtnUb-TGpy5w/view?usp=sharing",
        "titulo": "Problemas de las Matemáticas Superiores II",
        "carrera": "Ingeniería en Informática"
    },
    {
        "link": "https://drive.google.com/file/d/14yExUsqIhCHPrp7cCsI4m59eIfZJBl-4/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "titulo": "Economía 2: FORMACIÓN PROPEDÉUTICA",
        "carrera": "Marketing y Gestión Comercial",
        "autor": "Alberto Parra Villa, Juan Ambrosio Barrón Alcantar"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "autor": "Fabrina Furtado (et al)",
        "titulo": "Economía Verde: La nueva cara del Capitalismo",
        "link": "https://drive.google.com/file/d/1MTFgBYuZ4KI3_sA1bqHjTIc5FxqmWeC_/view?usp=sharing",
        "carrera": "Administración de Empresas"
    },
    {
        "link": "https://drive.google.com/file/d/1-B8kBRQEjDdEH9HQj2U8gD2mwZq0ht1N/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Contaduría Pública",
        "autor": "Anne Frank",
        "titulo": "El diario de Ana Frank"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1shLIn6Oimq8QhU0a4xmpYHXP7dYyb6V9/view?usp=sharing",
        "titulo": "Lecciones de Teoría de las Ecuaciones Integrales",
        "carrera": "Ingeniería en Informática",
        "autor": "I. Petrovski"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería en Informática",
        "link": "https://drive.google.com/file/d/1R3ODWwmNpgE8BwYZLZxZnqRudY2wMByE/view?usp=sharing",
        "titulo": "Álgebra Recreativa",
        "autor": "Y. Perelman - MIR"
    },
    {
        "autor": "Michel Latarjet, Alfredo Ruiz Liard",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/10sq1kb-fLK26aDB0wBfcoX5wmo3WHboI/view",
        "titulo": "Anatomía Humana Latarjet <span class=\"libro-edicion\">TOMO 1</span>",
        "carrera": "Medicina"
    },
    {
        "carrera": "Ingeniería en Informática",
        "autor": "A. S. Bársov",
        "titulo": "Qué es la Programación Lineal",
        "link": "https://drive.google.com/file/d/1cX5Z1DWORh9hPzBbZiCiV02re50JJAmP/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Contaduría Pública",
        "link": "https://drive.google.com/file/d/1BOsHn_NVjEEJRu7UxsxmNddgemowh2f0/view?usp=sharing",
        "titulo": "Aspectos del comercio exterior",
        "autor": "FERNANDO LAFUENTE"
    },
    {
        "link": "https://drive.google.com/file/d/1Bac5hy74cSIoOdt9vcEfgC4Uchn1qdkf/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "Gloria Jiménez-Marín, Antonio Leal Giménez",
        "titulo": "La gestión profesional del merchandising",
        "carrera": "Comercio Internacional"
    },
    {
        "autor": "Gareth R. Jones y Jennifer M. George",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "titulo": "Administración Contemporánea <span class=\"libro-edicion\">4 ed</span>",
        "carrera": "Marketing y Gestión Comercial",
        "link": "https://drive.google.com/file/d/1L845y52gw2Dmp5AEkZIy9nbJYTivt3ce/view?usp=sharing"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Marketing y Gestión Comercial",
        "titulo": "Administración de Servicios: Estrategias de marketing, operaciones y recursos humanos",
        "autor": "Christopher Lovelock, Javier Reynoso, Guillermo D’Andrea, Luis Huete",
        "link": "https://drive.google.com/file/d/1hX4mpowDe2Rohv9J8nZruhsszz2IHl0-/view?usp=sharing"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/17X7EwsyGFlfUXS7CirLZgw5tbJmcuVCJ/view?usp=sharing",
        "titulo": "Economía  internacional <span class=\"libro-edicion\">12 ed</span>",
        "carrera": "Administración de Empresas",
        "autor": "Robert J. Carbaugh"
    },
    {
        "carrera": "Medicina",
        "autor": "Tortora",
        "titulo": "Principios de Anatomía y Fisiología (Variante) <span class=\"libro-edicion\">11ª EDICIÓN</span>",
        "link": "https://drive.google.com/file/d/1evGZk9YmMAZ1BWgcVofP3_FbQFM5Te_i/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=300&q=80"
    },
    {
        "titulo": "Ecuaciones Algebraicas de Grados Arbitrarios",
        "carrera": "Ingeniería en Informática",
        "link": "https://drive.google.com/file/d/1B-6_WS44FfFD9zuyYEYLumtcqkeAaXVq/view?usp=sharing",
        "autor": "A. G. Kúrosch",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80"
    },
    {
        "carrera": "Administración de Empresas",
        "titulo": "Lectura, Expresión Oral y Escrita I",
        "link": "https://drive.google.com/file/d/13bZeC9S5dpG2VwFquoTtJPsoNCIk8iOh/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "autor": "Itzamná Ramírez L eón"
    },
    {
        "carrera": "Comercio Internacional",
        "titulo": "ADMINISTRACIÓN: Liderazgo y colaboración en un mundo competitivo <span class=\"libro-edicion\">8 ed</span>",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "Thomas S. Bateman y Scott A. Snell",
        "link": "https://drive.google.com/file/d/1kuBSzWTTT4EkyF_LaW4umLVZLLyw7eU7/view?usp=sharing"
    },
    {
        "autor": "Mario Azócar",
        "titulo": "El Cuerpo de los Complejos",
        "carrera": "Ingeniería en Informática",
        "link": "https://drive.google.com/file/d/1t446yE3vbVuWADgV9TxSpIGQjJdhZcrl/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "Damián Frontera Roig",
        "carrera": "Administración de Empresas",
        "titulo": "El arte de dirigir empresas: El estímulo incesante <span class=\"libro-edicion\">2 ed</span>",
        "link": "https://drive.google.com/file/d/1b9mbnKKCP0SqvsVtqSI3HPgo7oRnqVlh/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80"
    },
    {
        "titulo": "Contabilidad administrativa <span class=\"libro-edicion\">11 ed</span>",
        "carrera": "Administración de Empresas",
        "link": "https://drive.google.com/file/d/1FINxO9MokRP4XdDt1Xc4tZeApc5ge4VX/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "autor": "Ray H. Garrison, Eric W. Noreen y Peter C. Brewer"
    },
    {
        "link": "https://drive.google.com/file/d/1gq2XYlLMFa80rs4DDQxaa4F_Rc8xIdTm/view?usp=sharing",
        "autor": "GABINO FRAGA",
        "titulo": "DERECHO ADMINISTRATIVO",
        "carrera": "Derecho",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "José Hurtado de Mendoza Amat",
        "titulo": "Compilación de varios autores de Patología",
        "carrera": "Medicina",
        "link": "https://drive.google.com/file/d/1w4cgcm4VXj7jaYtT-g5SuqVMydf0Vae_/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/1qHLfgrxEyQ-4YVGlwQIMUqS28txbdqoB/view",
        "titulo": "Anatomía Clínica",
        "autor": "Pró",
        "carrera": "Medicina",
        "imagen": "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "carrera": "Administración de Empresas",
        "link": "https://drive.google.com/file/d/1-iXdZOTXPIUNkTB8nrHfIvIGKdZCyHFo/view?usp=sharing",
        "titulo": "Matemáticas para Administración y Economía",
        "autor": "Ernest F. Haeussler y Richard S. Paul"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1qUJVySs3RuTys2GRX3DxWZ2OXw6Z-I3W/view?usp=sharing",
        "carrera": "Enfermería",
        "titulo": "Farmacología de las infecciones por micobacterias",
        "autor": "J. Flórez, A. Mediavilla y J. M. García-Lobo"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1MmcMYZzWcPn3qt_hj9vkT94MMHLz2lK9/view?usp=sharing",
        "autor": "Jesús Dacio Villarreal Samaniego",
        "titulo": "ADMINISTRACIÓN FINANCIERA II",
        "carrera": "Marketing y Gestión Comercial"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=300&q=80",
        "carrera": "Medicina",
        "titulo": "Anatomía Funcional",
        "autor": "Christy Cael",
        "link": "https://drive.google.com/file/d/1LgA1AWfNx4R9XWSp4hOBuWnt2H0BABfn/view"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "carrera": "Derecho",
        "link": "https://drive.google.com/file/d/1nv11q-m19A9AWLLfIYpeLLme9r_4UMRh/view?usp=sharing",
        "autor": "Augusto C. Belluscio",
        "titulo": "Técnica Jurídica para las relaciones y sentencias|"
    },
    {
        "autor": "Paul Newbold, William L. Carlson y Betty M. Thorne",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1iKzTj4FfKJGl-BKndK803TozXK-rFklr/view?usp=sharing",
        "titulo": "Estadística para Administración  y Economía",
        "carrera": "Administración de Empresas"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1bOr_-FyqxLygRrqtCUXSj4pp7msUgp3D/view?usp=sharing",
        "carrera": "Administración de Empresas",
        "titulo": "INTRODUCCIÓN A LA CONTADURÍA",
        "autor": "Óscar Ramón Sánchez López (et al)"
    },
    {
        "carrera": "Enfermería",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "A. Mediavilla y J. M. García-Lobo",
        "titulo": "Antibióticos b-lactámicos",
        "link": "https://drive.google.com/file/d/15I3QhGjELjDi3Xj-eYlNMShb7KyRdgnu/view?usp=sharing"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería en Informática",
        "autor": "N. Ya. Vilenkin",
        "titulo": "Método de Aproximaciones Sucesivas",
        "link": "https://drive.google.com/file/d/1eCXh2hWUwfUP_XX7Qm_fb9t39WMGHlq4/view?usp=sharing"
    },
    {
        "autor": "Claudia Kuklinski",
        "titulo": "Nutrición y Bromatología",
        "carrera": "Nutrición",
        "link": "https://drive.google.com/file/d/1iqQH4k213pP6k79KBaWV0LGCAK_qB2HW/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80"
    },
    {
        "titulo": "Introducción al Business Intelligence",
        "carrera": "Ingeniería en Informática",
        "link": "https://drive.google.com/file/d/10bxsh1BvoW8XqXIV1tyiVDeC4HUr2LsW/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "autor": "Jordi Conesa Caralt (coord.) y Josep Curto Díaz"
    },
    {
        "carrera": "Medicina",
        "imagen": "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=300&q=80",
        "titulo": "Anatomía Humana: Descriptiva <span class=\"libro-edicion\">PARTE 1</span>",
        "autor": "Henri Rouvière, André Delmas",
        "link": "https://drive.google.com/file/d/184lFh7oCK9QlXiMmY--2iG09tBkjw338/view?usp=sharing"
    },
    {
        "autor": "Saladin",
        "imagen": "https://images.unsplash.com/photo-1583947215259-38e31be0b51f?auto=format&fit=crop&w=300&q=80",
        "titulo": "Anatomía y Fisiología <span class=\"libro-edicion\">6TA EDICIÓN</span>",
        "carrera": "Medicina",
        "link": "https://drive.google.com/file/d/1vwTb3CDp4qUIAoLl5CzqqslQKzStVQNW/view"
    },
    {
        "titulo": "Insulina e hipoglucemiantes orales. Glucagón",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "J. Freijanes y J. Flórez",
        "carrera": "Enfermería",
        "link": "https://drive.google.com/file/d/166vg42yfG0iHhDaDzS1kIFpweAHkym1V/view?usp=sharing"
    },
    {
        "link": "https://drive.google.com/file/d/1ZjswzXie77GaifOmGyQUoVqjJ3tq-KHV/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "autor": "XAVIER LABANDEIRA, CARMELO J. LEÓN, MARÍA XOSÉ VÁZQUEZ",
        "carrera": "Administración de Empresas",
        "titulo": "ECONOMÍA AMBIENTAL"
    },
    {
        "titulo": "Diez Negritos: Y no quedó ninguno",
        "autor": "Agatha Christie",
        "carrera": "Administración de Empresas",
        "link": "https://drive.google.com/file/d/1NxH6eNUW0am6SpgBKEwLcPbwu3lP-fkG/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80"
    },
    {
        "carrera": "Derecho",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1_Jk-fkLhjS0wRQS255UIN-tL65QXyLHc/view?usp=drive_link",
        "autor": "José Luis Molina.",
        "titulo": "MANUAL DE ANTROPOLOGÍA ECONÓMICA"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "autor": "S/A",
        "link": "https://drive.google.com/file/d/16lZnl_AAQ8cVVnUFgA1NxqX8wMk_--4M/view?usp=sharing",
        "titulo": "DERECHO PROCESAL CIVIL parte 2",
        "carrera": "Derecho"
    },
    {
        "titulo": "Antropología del Cerebro: La conciencia y los sistemas simbólicos",
        "carrera": "Derecho",
        "autor": "Roger Bartra",
        "link": "https://drive.google.com/file/d/1esEdI_j8zwnxz0JS8h4_yZDvN8nLduKM/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/1NS5AtER0ItESZZ-zTt1i3Huwwkglc7ow/view?usp=sharing",
        "autor": "Ralph S. Polimeni, Frank J. Fabozzi, Arthur H. Adelberg",
        "titulo": "MANUAL DE CONTABILIDAD GERENCIAL",
        "carrera": "Marketing y Gestión Comercial",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "carrera": "Derecho",
        "link": "https://drive.google.com/file/d/1kvrwA36yNZZ4E5ZAuFplddgT8UDEUlFv/view?usp=sharing",
        "titulo": "DERECHO POLÍTICO: Tomo I <span class=\"libro-edicion\">8 ed</span>",
        "autor": "CARLOS S. FAYT"
    },
    {
        "link": "https://drive.google.com/file/d/1qouhdkZDlFF1Sx49vt_mPwbK6M3CNB59/view?usp=sharing",
        "titulo": "COSTOS <span class=\"libro-edicion\">2 ED</span>",
        "autor": "Francisco Javier Calleja Bernal",
        "carrera": "Administración de Empresas",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/1QymFLBeM9wsnoZrN6bkx8KzDh3Pgkhha/view?usp=sharing",
        "carrera": "Contaduría Pública",
        "autor": "Econ. Marcelo Abad V.",
        "titulo": "La administración del cambio organizacional y su vinculación con el liderazgo",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "carrera": "Administración de Empresas",
        "titulo": "TU EMPRESA por 100 €",
        "link": "https://drive.google.com/file/d/1s3l1horgJcq1n3iXLFKGliPHsCZI52_w/view?usp=sharing",
        "autor": "Ariel Andrés Almada",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "I. Vinogradov",
        "carrera": "Ingeniería en Informática",
        "titulo": "Fundamentos de la Teoría de los Números",
        "link": "https://drive.google.com/file/d/1BOq_oUtd_zBzzkNacSapo4tUTkRzmmw5/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/1jAYGybscPHCPFv092W6w5ntVmo8Dsv65/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "autor": "Ing. Luis Manrique L.",
        "carrera": "Ingeniería en Informática",
        "titulo": "Algebra Radicación y racionalización"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1Pm6PgSvaYFkvSzDkkOAcvFAOpvcEdFi_/view?usp=sharing",
        "titulo": "Hormonas neurohipofisarias. Fármacos antidiuréticos. Farmacología uterina",
        "carrera": "Enfermería",
        "autor": "J. Flórez"
    },
    {
        "autor": "J. Camí y F. J. Ayesta",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/17lQ3XxVn8OcYSo-k8zFKnmFO4n9RZMMO/view?usp=sharing",
        "carrera": "Enfermería",
        "titulo": "Farmacodependencias"
    },
    {
        "autor": "Philip Kotler, Gary Armstrong",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1xpb65nlhLZkN4NxN1xczBzin-L4fB01n/view?usp=sharing",
        "titulo": "Marketing Marketing: Versión para Latinoamérica <span class=\"libro-edicion\">11 ed</span>",
        "carrera": "Marketing y Gestión Comercial"
    },
    {
        "titulo": "Administración: Escuelas, proceso administrativo, áreas funcionales y desarrollo emprendedor",
        "carrera": "Contaduría Pública",
        "autor": "Lourdes Münch",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1sJeyEEtIlnU3fzktGEdQVDpuoh2yphfs/view?usp=sharing"
    },
    {
        "carrera": "Ingeniería en Informática",
        "titulo": "Rectas y Curvas",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "autor": "N. B. Vasiliev - V. L. Gutenmajer",
        "link": "https://drive.google.com/file/d/1rrrHnCqnmKzqGJmq2UjVDxUVz7UAsKuQ/view?usp=sharing"
    },
    {
        "titulo": "Conceptos Báscios del Derecho",
        "link": "https://drive.google.com/file/d/176vI0UijHkSHC555K0MOSe1LLYS9VSzb/view?usp=sharing",
        "carrera": "Administración de Empresas",
        "autor": "Eduardo Antinori",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "Alberto Romero",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Marketing y Gestión Comercial",
        "link": "https://drive.google.com/file/d/1lH-sENE-ENyWocTZcYM-yzzevjIokVj7/view?usp=sharing",
        "titulo": "Globalización y pobreza"
    },
    {
        "carrera": "Enfermería",
        "titulo": "Farmacología de la hemostasia, la coagulación y la fibrinólisis",
        "link": "https://drive.google.com/file/d/1PTOEmqmqp-GV61i78cOHt7qmNsxbCjUz/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "J. Flórez y M. C. Sedano"
    },
    {
        "autor": "A. Mediavilla, J. Flórez y J. M. García-Lobo",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "carrera": "Enfermería",
        "link": "https://drive.google.com/file/d/1ticGxo4YAMOsc7d8Bv7rZMMVKVQZBCpP/view?usp=sharing",
        "titulo": "Farmacología de las enfermedades infecciosas: principios generales, selección y asociaciones de antibióticos"
    },
    {
        "carrera": "Ingeniería en Informática",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1pJ14w4Qneoxy_u1SFnVFf2xGjvDkuzQr/view?usp=sharing",
        "titulo": "Ecuaciones Diferenciales",
        "autor": "Moisés Lázaro"
    },
    {
        "link": "https://drive.google.com/file/d/1xpyZPbYhuCifB8-HDataO5I2Cq6wTIn-/view?usp=sharing",
        "autor": "Álvaro López Cabrales, Susana Pasamar, Ramón Valle Cabrera",
        "titulo": "Fundamentos para la gestión estratégica de los recursos humanos",
        "carrera": "Marketing y Gestión Comercial",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "titulo": "Organízate con eficacia: Máxima productividad personal  sin estrés <span class=\"libro-edicion\">2 ed</span>",
        "link": "https://drive.google.com/file/d/1XlV4iuOBi634dac7eanTJWeTR-k9UwQC/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Psicología Organizacional",
        "autor": "David Allen"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1hjOYFyU4K37Zx7uUM4E9NjEIaNHiouUJ/view?usp=sharing",
        "carrera": "Administración de Empresas",
        "autor": "PAUL R. KRUGMAN, MAURICE OBSTFELD",
        "titulo": "ECONOMÍA INTERNACIONAL: Teoría y política <span class=\"libro-edicion\">7 ed</span>"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1rYQK2jPptoAhFoaYYq2hTJxTYuk8lRSC/view?usp=sharing",
        "titulo": "Teoria De Ecuaciones",
        "autor": "J.V. Uspensky",
        "carrera": "Ingeniería en Informática"
    },
    {
        "link": "https://drive.google.com/file/d/1yc4njUGBdwHLEnP_8pJo-3t9RGFbsIVu/view?usp=sharing",
        "carrera": "Marketing y Gestión Comercial",
        "titulo": "Administración: Una perspectiva Global",
        "autor": "Harold Koont",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1R6uxqfXP-TfZMB7MmJkmY3v-cwYqAiMa/view?usp=sharing",
        "titulo": "Interpretación fácil de la bioestadística",
        "autor": "Gail F. Dawson",
        "carrera": "Medicina"
    },
    {
        "carrera": "Enfermería",
        "titulo": "Farmacología de la secreción ácida gástrica y de la ulceración mucosa digestiva",
        "autor": "J. V. Esplugues y J. Flórez",
        "link": "https://drive.google.com/file/d/1Dp_YETkWjhJfbRs-yZflm8mgk43J6lRq/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "titulo": "Marketing turístico <span class=\"libro-edicion\">5 ed</span>",
        "link": "https://drive.google.com/file/d/1LudyQPamfrNYv9XPQOIsUIgmu2OAJjuq/view?usp=sharing",
        "carrera": "Marketing y Gestión Comercial",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "Philip Kotler, Jesús García de Madariaga Miranda, Javier Flores Zamora, John T. Bowen, James C. Makens"
    },
    {
        "autor": "S. Sánchez-Cuadrado",
        "carrera": "Ciencias Políticas",
        "titulo": "El Buen Uso del Lenguaje",
        "link": "https://drive.google.com/file/d/1IqyAtmi1MXnZz10QagSE_PyK-cALh8Ol/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "carrera": "Marketing y Gestión Comercial",
        "titulo": "Manual de marketing y comunicación cultural",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "S/A",
        "link": "https://drive.google.com/file/d/17-6TbCv7SXj2i--5nbBjcSc8A5bgm1y9/view?usp=sharing"
    },
    {
        "link": "https://drive.google.com/file/d/1sZ_mqHexjzAG5XSTEj7nbX5YhCvBduOa/view?usp=sharing",
        "autor": "Michael E. Porter",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería Comercial",
        "titulo": "ESTRATEGIA COMPETITIVA: Técnicas para el Análisis de los Sectores Industriales y de la Competencia"
    },
    {
        "titulo": "Universidad Disney",
        "autor": "Doug Lipp",
        "carrera": "Contaduría Pública",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/19xij6tDb9XVztdww-DnwkHrZ-enzWVLq/view?usp=sharing"
    },
    {
        "autor": "M. Krasnov - KIseliov - Makarenko",
        "titulo": "Ecuaciones Integrales",
        "carrera": "Ingeniería en Informática",
        "link": "https://drive.google.com/file/d/1LE3o4U6jH1DKWQh2EDoYf-jdVmbsawhP/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=300&q=80",
        "carrera": "Medicina",
        "link": "https://drive.google.com/file/d/1vVp2atuNmZuBu1U6Z04YbYUdlLN3Ml-g/view",
        "titulo": "Anatomía para el Diagnóstico Radiológico",
        "autor": "Stephanie Ryan"
    },
    {
        "autor": "Manuel Fernández Rios",
        "titulo": "Diccionario de recursos humanos: Organización y dirección",
        "carrera": "Contaduría Pública",
        "link": "https://drive.google.com/file/d/1rSybqt5M5S2DtXA9Tl_Le3Ej47XnFA7X/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "Bruce E. Meserve",
        "titulo": "Conceptos Fundamentales de Álgebra",
        "link": "https://drive.google.com/file/d/1MdcTyeMcuzZl-d0QJaq4UsGQa1f6aB9V/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería en Informática"
    },
    {
        "titulo": "Cuadernos de Estrategia 161 Seguridad alimentaria",
        "carrera": "Derecho",
        "link": "https://drive.google.com/file/d/1PtkuU5xczm8UyH8lD58sJwYRfsK9Qx1G/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "autor": "SEGURIDAD ALIMENTARIA Y SEGURIDAD GLOBAL"
    },
    {
        "carrera": "Marketing y Gestión Comercial",
        "titulo": "Administración de Producción y Operaciones",
        "autor": "Norman Gaither y Greg Fazier",
        "link": "https://drive.google.com/file/d/1MEFKGAwdOwDJMCaO-UlyMt3an2M_4VZ_/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "titulo": "Ecuaciones Diferenciales en Derivadas Parciales",
        "link": "https://drive.google.com/file/d/12E9ptRHP-r9tziBM1rZ7FFI0sKnpXunW/view?usp=sharing",
        "autor": "V.P. Mijáilov",
        "carrera": "Ingeniería en Informática",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80"
    },
    {
        "titulo": "Resolución de Ecuaciones en Números Enteros",
        "link": "https://drive.google.com/file/d/1F0fca5TNEJ9ZnaxfhB47SE_hEP6KYN46/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería en Informática",
        "autor": "A. O. Guelfond"
    },
    {
        "link": "https://drive.google.com/file/d/1_2nYxKw4BP5NXZxYs0vY79giSl77WUFH/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "titulo": "La teoría del crecimiento: Una exposición",
        "autor": "ROBERT MERTON SOLOW",
        "carrera": "Comercio Internacional"
    },
    {
        "carrera": "Enfermería",
        "titulo": "Fármacos que modifican la actividad simpática",
        "autor": "J. A. García-Sevilla y F. Barturen",
        "link": "https://drive.google.com/file/d/1mPv6LVvZdNPhAowRyKAg76TFKDpHn-Ww/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "carrera": "Administración de Empresas",
        "titulo": "Fundamentos de Administración Financiera",
        "autor": "James C. Van Horne y John M. Wachowicz, Jr.",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1eG8mKg5oIlYfYyrFwTHrUK4P7bcoM919/view?usp=sharing"
    },
    {
        "autor": "D. Angel Benedit Gómez, D. U. E. del Servicio de Medicina Nuclear",
        "titulo": "Manual de exploraciones en Medicina Nuclear para enfermería",
        "carrera": "Enfermería",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1WgDKfHrLYulXLoWlCHfEIYLpiYVayw_c/view?usp=sharing"
    },
    {
        "autor": "Eduardo Restrepo",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1QpVQTqDp_xNF68Pg6c_T5f5-ui25BEuS/view?usp=sharing",
        "titulo": "Intervenciones en teoría cultural",
        "carrera": "Ingeniería en Informática"
    },
    {
        "link": "https://drive.google.com/file/d/1G2HawLSVBk5pHLasG5ypMqNRBb0zIqbi/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "CHARLES WEBEL JOHAN GALTUNG",
        "carrera": "Relaciones Internacionales",
        "titulo": "HANDBOOK OF PEACE AND CONFLICT STUDIES"
    },
    {
        "autor": "VIRGINIA BERTOLOTTI",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "carrera": "Administración de Empresas",
        "link": "https://drive.google.com/file/d/12ZrD3n-B08AWD7XLe5ZXJaJbGK1kChfB/view?usp=sharing",
        "titulo": "COMUNICACIÓN ORAL Y ESCRITA EN LA GESTIÓN ADMINISTRATIVA"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1aK7Z9dyctqyCJmMqWl79yTvvHPmbPubX/view?usp=sharing",
        "titulo": "EL CICLO CONTABLE",
        "carrera": "Administración de Empresas",
        "autor": "S/A"
    },
    {
        "carrera": "Enfermería",
        "titulo": "Guía para el Cuidado  del Paciente con Cáncer en el Hogar",
        "link": "https://drive.google.com/file/d/1VnFWRm5N-9FTf-MXpLQvjsoqBF223KJj/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "autor": "S/A"
    },
    {
        "autor": "HOSPITAL UNIVERSITARIO REINA SOFÍA",
        "titulo": "Accesos venosos centrales GUÍA DE CUIDADOS",
        "link": "https://drive.google.com/file/d/1x1ovvrrJ9JAupcNpMNUYtDEuRfjOknCi/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería en Informática"
    },
    {
        "titulo": "Nutrición del Recién Nacido",
        "carrera": "Nutrición",
        "autor": "Reina Valdés Armenteros",
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1nCULfhxte1SH7j_43CIZz0PEb5jhFc-6/view?usp=sharing"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "titulo": "Matrices",
        "autor": "Armando Quispe",
        "link": "https://drive.google.com/file/d/1EQKWDve8gBGSUSG1Yc_k11zN4FqyygE7/view?usp=sharing",
        "carrera": "Ingeniería en Informática"
    },
    {
        "carrera": "Nutrición",
        "titulo": "Krause Dietoterapia <span class=\"libro-edicion\">14ED</span>",
        "link": "https://drive.google.com/file/d/14CQ7cuNfBePwybRuMkgUKmObvymPWrXE/view?usp=sharing",
        "autor": "L. Kathleen Mahan, Janice L. Raymond",
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería en Informática",
        "link": "https://drive.google.com/file/d/1BlU4YGLTT6aJMjjyiMsuhQmf0qplobUv/view?usp=sharing",
        "titulo": "Sucesiones en el cuerpo R",
        "autor": "Mario R. Azocar"
    },
    {
        "autor": "Jorge Sierra y Acosta, María Virginia Guzman Ibarra, Francisco García Mora",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1uKNJR7cW-S37gqYnDLfbPP0yNsYYsEaV/view?usp=sharing",
        "titulo": "ADMINISTRACIÓN DE ALMACENES Y CONTROL DE INVENTARIOS",
        "carrera": "Administración de Empresas"
    },
    {
        "carrera": "Administración de Empresas",
        "titulo": "Manual de Comercio Internacional",
        "autor": "Dr. Eduardo Cuenca García, (et al)",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/16wyUnqVaeyzAfj4nPbx9zBbsVQuW_Or7/view?usp=sharing"
    },
    {
        "carrera": "Enfermería",
        "titulo": "Glosario de términos de metodología y lenguajes  enfermeros",
        "autor": "Marta Romero García, Maria Eulàlia Juvé Udina, Núria Fabrellas Padrés",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1L12-qb-61PFyuyJDeD24vSgF2PDcPqZx/view?usp=sharing"
    },
    {
        "autor": "I. L. Záitsev",
        "carrera": "Ingeniería en Informática",
        "titulo": "Elementos de Matemáticas Superiores",
        "link": "https://drive.google.com/file/d/1svO8fAxREZ5vPq_L5Degza5COuQB7Hk7/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80"
    },
    {
        "carrera": "Comercio Internacional",
        "titulo": "Introducción a los negocios internacionales",
        "link": "https://drive.google.com/file/d/1e9C-bPr_HWueYcrEWyQ1dXDTkKnY8MJi/view?usp=sharing",
        "autor": "Fernando Hernández Contreras",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/17fT6ZKh-P7s3jxqy6ytii9I34pBBXVrg/view?usp=sharing",
        "titulo": "Estadística aplicada a los negocios y la economía",
        "carrera": "Marketing y Gestión Comercial",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "Douglas A. Lind, William G. Marchal, Samuel A. Wathen"
    },
    {
        "carrera": "Administración de Empresas",
        "autor": "Michael Parkin",
        "titulo": "Economía",
        "link": "https://drive.google.com/file/d/1sm8FTLv0tteYBjj5Byau7HaQZTSTMMvP/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/1A_-fVtNGy_BY4sHVSfQ9XZoGDZdVp4HY/view?usp=sharing",
        "autor": "Allen R. Angel",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "titulo": "Álgebra Intermedia",
        "carrera": "Ingeniería en Informática"
    },
    {
        "titulo": "Clarificación de valores y desarrollo humano: ESTRATEGIAS PARA LA ESCUELA",
        "autor": "Antonia V. Pascual Marina",
        "link": "https://drive.google.com/file/d/1DOp9gJI1NnjcOdne6cQFb4NBkoYQdbMR/view?usp=sharing",
        "carrera": "Administración de Empresas",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80"
    },
    {
        "carrera": "Ingeniería en Informática",
        "titulo": "Manual de Matemáticas para la Enseñanza Media",
        "link": "https://drive.google.com/file/d/19A2-Z0SyfP9VoaLfcWQ_CxTMfBzELx8H/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "autor": "V. Litvinenko - A. G. Tsipkin"
    },
    {
        "titulo": "ESTADÍSTICA CIENCIAS SOCIALES",
        "autor": "Harnoldo Erazo Pérez Tejeda",
        "carrera": "Administración de Empresas",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1wuNsFrhoUTpbCZqhtLsMJMNgTd2I18DZ/view?usp=sharing"
    },
    {
        "link": "https://drive.google.com/file/d/1OoPKuZXgxOa-ZHDXKMN1UWiuvRXlk2k9/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "Gary S. Becker",
        "carrera": "Contaduría Pública",
        "titulo": "La Naturaleza de la Competencia"
    },
    {
        "autor": "ERICA ARIEL FOX",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1b-supMjfkpJJWbJw-pMR09LJUtl78b7D/view?usp=sharing",
        "carrera": "Comercio Internacional",
        "titulo": "Más allá del sí: Un método para superar el autosabotaje  y negociar con éxito"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=300&q=80",
        "titulo": "Anatomía Humana (Tronco) Rouviere <span class=\"libro-edicion\">TOMO 2</span>",
        "autor": "Henri Rouviere, André Delmas",
        "carrera": "Medicina",
        "link": "https://drive.google.com/file/d/11JCQZQbSivT_6f4SEne_YvhLaWpgHxTh/view"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1emmzSRC3O04CodOGFYqun0FMO-2j5PF1/view?usp=sharing",
        "titulo": "Problemas de Matemática Discreta",
        "carrera": "Ingeniería en Informática",
        "autor": "G. Gavrílov - A. Sapozhenko"
    },
    {
        "link": "https://drive.google.com/file/d/1aiYRztQMkjMPq1_CIYGxb8uS6T9OShgs/view?usp=sharing",
        "carrera": "Nutrición",
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80",
        "autor": "María Elena Torresani, María Inés Somoza",
        "titulo": "Lineamientos para el cuidado nutricional <span class=\"libro-edicion\">3ed</span>"
    },
    {
        "link": "https://drive.google.com/file/d/1liqYKDq2agrirzD7gNZ0TuY0vPAKFhzF/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "Juan Román Santillana",
        "carrera": "Contaduría Pública",
        "titulo": "Auditorio interna <span class=\"libro-edicion\">3 ed</span>"
    },
    {
        "carrera": "Relaciones Internacionales",
        "titulo": "Entrepreneurship",
        "autor": "Bantie Workie (et al)",
        "link": "https://drive.google.com/file/d/1hZE4kqIS8UBpy6E1cQjBf_5ZwP52_JCe/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "CTO Editorial",
        "carrera": "Medicina",
        "titulo": "Manual CTO de Medicina - Nefrología <span class=\"libro-edicion\">4.ª EDICIÓN</span>",
        "link": "https://drive.google.com/file/d/1XZms6rFeoRvRpXNT2AMOHo_tgMkKonz5/view",
        "imagen": "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "Enrique Aimone Gibson y Adolfo Silva Walbaum",
        "titulo": "Derecho económico",
        "carrera": "Derecho",
        "link": "https://drive.google.com/file/d/1A72Awq1Xb9R1odd71lAVsRrlyOmhfJj7/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/1nIyHsPCeQSh8HcmGVPCLhN4OGeQddP0W/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "autor": "Ing. Armando Quispe P.",
        "titulo": "Teoría de las ecuaciones",
        "carrera": "Ingeniería en Informática"
    },
    {
        "carrera": "Enfermería",
        "titulo": "Fármacos ansiolíticos y sedantes",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "M. A. Hurlé",
        "link": "https://drive.google.com/file/d/176oJgNDhvEg-AVP0s0ytv2PINgTlU5id/view?usp=sharing"
    },
    {
        "link": "https://drive.google.com/file/d/1kHZh1cjGRSywjxDfnf3kPoyG5gmIqqZP/view?usp=sharing",
        "titulo": "Ecuaciones Diferenciales y sus Aplicaciones",
        "carrera": "Ingeniería en Informática",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "autor": "Martin Braun"
    },
    {
        "autor": "T. Harv Eker",
        "carrera": "Administración de Empresas",
        "titulo": "Los Secretos de la Mente Millonaria",
        "link": "https://drive.google.com/file/d/1_ikuweWyePn96U_yCZR0aHARKTElOKUE/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80"
    },
    {
        "carrera": "Comercio Internacional",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1gquM3G7qtsrZ0lPVc_xc-EmPr2hSy7w2/view?usp=sharing",
        "titulo": "La gestión de la innovación y la tecnología en las organizaciones",
        "autor": "ANTONIO HIDALGO NUCHERA, GONZALO LEÓN SERRANO, JULIÁN PAVÓN MOROTE"
    },
    {
        "titulo": "Finanzas Corporativas",
        "link": "https://drive.google.com/file/d/104U0pSwN8B8P7Mqt2eWySBVev9ChYVme/view?usp=sharing",
        "carrera": "Ingeniería Comercial",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "Stephen A. Ross, R andolph W. Westerfield y Jeffrey Jaffe"
    },
    {
        "autor": "Alvaro Bello y Marta Rangel",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1jQwQ99gVvEan9jmlzKIZUzkGPtxsMjJi/view?usp=sharing",
        "titulo": "ETNICIDAD, \"RAZA\" Y EQUIDAD EN AMÉRICA LATINAY EL CARIBE",
        "carrera": "Derecho"
    },
    {
        "carrera": "Relaciones Internacionales",
        "link": "https://drive.google.com/file/d/1JFjC1UwDqdIKyhUUeumMBAExth0k9pHx/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "Jeffry A.Frieden y David A.Lake",
        "titulo": "International Political Economy <span class=\"libro-edicion\">4° ED</span>"
    },
    {
        "titulo": "Fármacos antiepilépticos y anticonvulsivos",
        "link": "https://drive.google.com/file/d/14Isn3jfUy-k_re4ugzyYokP8qvY5xJZb/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "J. A. Armijo",
        "carrera": "Enfermería"
    },
    {
        "link": "https://drive.google.com/file/d/1TdGSILlpRPVtxO9JYq29DGqa5a9kvPMC/view?usp=sharing",
        "autor": "S/A",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Marketing y Gestión Comercial",
        "titulo": "ADMINISTRACIÓN DE EMPRESAS Y ORGANIZACIÓN  DE LA PRODUCCIÓN"
    },
    {
        "link": "https://drive.google.com/file/d/1_dr0o0Ex2QDaJrzKcIg_CusMxH7uGk7W/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "Cécile Mouly",
        "carrera": "Relaciones Internacionales",
        "titulo": "Estudios de paz y conflictos: Teoria y Practica"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería en Informática",
        "link": "https://drive.google.com/file/d/1dbuOcvOgrdcGiB4cMjzwT8PbWsH-guhm/view?usp=sharing",
        "titulo": "Logaritmos",
        "autor": "Armando Quispe Pauyacc"
    },
    {
        "autor": "David Werner, Bill Bower",
        "carrera": "Nutrición",
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1pHr8BWgo4N7QNBo3F4jrbJO2Ry3Yo4Qu/view?usp=sharing",
        "titulo": "Aprendiendo a Promover la Salud"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1kNIfvfAL3Q9TrQsxGU3RV1PsElinBEGu/view?usp=sharing",
        "titulo": "Hormonas adenohipofisarias e hipotalámicas",
        "carrera": "Enfermería",
        "autor": "J. A. Amado y J. Flórez"
    },
    {
        "link": "https://drive.google.com/file/d/1ueI3zWCOAj97jt0jLK5rA35T1u1FLaGF/view?usp=sharing",
        "autor": "Luis Puchol",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Contaduría Pública",
        "titulo": "Dirección y gestión de recursos humanos <span class=\"libro-edicion\">5 ed</span>"
    },
    {
        "titulo": "CONTABILIDAD Y FISCALIDAD",
        "carrera": "Ingeniería en Informática",
        "link": "https://drive.google.com/file/d/1H8AgMhjiWCGRVPGz5fCBYw75vk1zkr20/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "autor": "Dr. D. Enrique R. Blanco Richart"
    },
    {
        "carrera": "Administración de Empresas",
        "autor": "Charles T. Horngren, Walter T. Harrison Jr., Linda Smith Bamber",
        "titulo": "CONTABILIDAD <span class=\"libro-edicion\">5 ed</span>",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1JDCj67sGTM0L1c1p9eltA4AEG_GVTC64/view?usp=sharing"
    },
    {
        "autor": "Elies Furio Blasco",
        "carrera": "Comercio Internacional",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1NblFPXSoY518pUBJn-C4VAWD7cHwsINg/view?usp=sharing",
        "titulo": "LOS LENGUAJES DE LA ECONOMÍA: Un recorrido por los marcos conceptuales de la Economía"
    },
    {
        "link": "https://drive.google.com/file/d/1x87LhozYKniEfRzXHO4H7d9srZi6IuTT/view?usp=sharing",
        "autor": "Rafael Grasa",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ciencias Políticas",
        "titulo": "LAS ORGANIZACIONES INTERNACIONALES Y LOS NUEVOS  DESAFÍOS GLOBALES"
    },
    {
        "autor": "John T. Hansen",
        "titulo": "Netter Cuaderno de Anatomía <span class=\"libro-edicion\">2ª EDICIÓN</span>",
        "link": "https://drive.google.com/file/d/1Rl2BrMwtCoQgEmuy2N3PIIOnmHQosTwO/view",
        "carrera": "Medicina",
        "imagen": "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "EL CONGRESO DE LA NACIÓN PARAGUAYA",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "carrera": "Derecho",
        "titulo": "LEY Nº 1.879/02  DE ARBITRAJE Y MEDIACIÓN",
        "link": "https://docs.google.com/document/d/1T8afUDiYqJiATrZeG251aJopU1cKLAWG/edit?usp=sharing&ouid=111681295415760948313&rtpof=true&sd=true"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "titulo": "GUÍA DE MARKETING DE CONTENIDOS PARA EMPRESAS B2B",
        "autor": "S/A",
        "carrera": "Marketing y Gestión Comercial",
        "link": "https://drive.google.com/file/d/1ITdfsPYYYt__iWTRoFNmTvE8woyHMn2u/view?usp=sharing"
    },
    {
        "titulo": "CÓDIGO CIVIL COMENTADO: DOCTRINA - JURISPRUDENCIA - BIBLIOGRAFÍA <span class=\"libro-edicion\">Tomo II</span>",
        "autor": "CLAUDIO KIPER",
        "link": "https://drive.google.com/file/d/1-vaXUt5Zeu42_cbiyXczoVToj_XpwsIS/view?usp=sharing",
        "carrera": "Derecho",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/1LyvnM4UNHlNPd3bZ0hssuc8syu-xLn6b/view?usp=sharing",
        "carrera": "Contaduría Pública",
        "autor": "Víctor Oltra Comorera",
        "titulo": "Desarrollo del Factor Humano",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería en Informática",
        "link": "https://drive.google.com/file/d/1WltM9Gd4LrLeJXT1VDfQQei3VHYXzpVj/view?usp=sharing",
        "titulo": "Binomio de Newton",
        "autor": "Armando Quispe"
    },
    {
        "link": "https://drive.google.com/file/d/1A6FxxgbG6EiWbCeXohtwlg5orMFgA52C/view?usp=sharing",
        "autor": "P.B. Gusiátnikov, S.V. Reznichenko",
        "titulo": "Álgebra Vectorial en Ejemplos y Problemas",
        "carrera": "Ingeniería en Informática",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80"
    },
    {
        "carrera": "Marketing y Gestión Comercial",
        "titulo": "Administración I",
        "autor": "Gabriel Barragán Casares",
        "link": "https://drive.google.com/file/d/10KX69OnLCrq6Qn08KR6ogc_7WLmDUZWs/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/1eqIh1MtXP1orVCcj6Po1Umx77Xon42-u/view?usp=sharing",
        "carrera": "Ingeniería Comercial",
        "autor": "Franklin Allen, Stewart C. Myers, Richard A. Brealey",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "titulo": "Principios de Finanzas Corporativas <span class=\"libro-edicion\">9 ed</span>"
    },
    {
        "autor": "Charles T. Horngren, Srikant M. Datar",
        "carrera": "Administración de Empresas",
        "titulo": "Contabilidad de costos: Un enfoque gerencial",
        "link": "https://drive.google.com/file/d/1YMjxdU2lP8Z1mSnizvG1sP0UUwqcRees/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80"
    },
    {
        "carrera": "Nutrición",
        "titulo": "Atlas Hematología Clínica <span class=\"libro-edicion\">3ed</span>",
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80",
        "autor": "H. J. CARR, B. F. RODAK",
        "link": "https://drive.google.com/file/d/1Gpojs4vpF67nSUY0pVs3JHxNcdlFeg9j/view?usp=sharing"
    },
    {
        "titulo": "Teorías y conceptos de economía regional  y estudios de caso",
        "carrera": "Administración de Empresas",
        "autor": "MARCO ANTONIO MERCHAND ROJAS",
        "link": "https://drive.google.com/file/d/11fl5jtd3dieHxlzAb_x5FCG5yyVQKlFc/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "S/A",
        "link": "https://drive.google.com/file/d/1msWKa07D3ETNZwjlkCFrNUExc6Ix_lVp/view?usp=sharing",
        "titulo": "Estrategias de Marketing para lanzar tu producto",
        "carrera": "Marketing y Gestión Comercial"
    },
    {
        "autor": "R. A. Kalnin - MIR",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1DQc53L26mZMgX7Y1rLp1lOiITbX2N88D/view?usp=sharing",
        "titulo": "Álgebra y Funciones Elementales",
        "carrera": "Ingeniería en Informática"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1-J8Uc5EnhRSEVQMGlEkn4sQIaqtG6afF/view?usp=sharing",
        "titulo": "Polinomios",
        "autor": "Carlos Nakamura",
        "carrera": "Ingeniería en Informática"
    },
    {
        "link": "https://drive.google.com/file/d/1bVE63gfd1ud69PS1rH12FBLiy9Vt9CPS/view?usp=sharing",
        "autor": "Genaro Carrió",
        "titulo": "Como fundar un recurso",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "carrera": "Derecho"
    },
    {
        "autor": "AGUSTÍN MEDINA",
        "carrera": "Comercio Internacional",
        "titulo": "La vuelta al mundo de la empresa en 500 tweets",
        "link": "https://drive.google.com/file/d/1Y3XYyNqoXwwRf4v-LI5eOz-aJfoRU9EM/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/1oN4PLo3oWur-3f2yb0FOp-iGNUOYaUPg/view?usp=sharing",
        "carrera": "Comercio Internacional",
        "autor": "Mario Alberto Gaviria Ríos",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "titulo": "APUNTES DE TEORÍA Y POLÍTICA MONETARIA"
    },
    {
        "titulo": "La Estrategia del Delfín:  Éxito para negociaciones difíciles",
        "link": "https://drive.google.com/file/d/1gMtkIgTRQqsSQJh20I42aUDMSsHYwnhj/view?usp=sharing",
        "carrera": "Comercio Internacional",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "Alejandro Ambrad Chalela"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "autor": "JAMES STEWART, LOTHAR REDLIN, SALEEM WATSON",
        "titulo": "PreCalculo Matematicas para el calculo E6",
        "link": "https://drive.google.com/file/d/15MSv7uSZYL9fBPeZzAiQ3BrcymRc6Q_S/view?usp=sharing",
        "carrera": "Ingeniería en Informática"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1E62uSeTp6sAvaoZJG6pj6In9eDmncEVf/view?usp=sharing",
        "titulo": "Economía, Comercio e Inversiones",
        "carrera": "Administración de Empresas",
        "autor": "Enrique Dussel Peters (coord.)"
    },
    {
        "link": "https://drive.google.com/file/d/1wMinDagjtzv1P_Yawr5SnOWJdh7zmDqs/view?usp=sharing",
        "titulo": "Como se Hace una Apelación",
        "autor": "Enrique Falcón",
        "carrera": "Derecho",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "Michel Dufour",
        "imagen": "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?auto=format&fit=crop&w=300&q=80",
        "carrera": "Medicina",
        "link": "https://drive.google.com/file/d/1ZZU0YfVQ_v48N2mNSZzzYcdaYh6JAHU1/view",
        "titulo": "Anatomía del Aparato Locomotor <span class=\"libro-edicion\">TOMO 1</span>"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "autor": "Dra. Marianela Denegri Coria",
        "link": "https://drive.google.com/file/d/191Q2zg3dvffUNzRu0NbDmJv48SIKKcvc/view?usp=sharing",
        "titulo": "Introducción a la Psicología Económica",
        "carrera": "Administración de Empresas"
    },
    {
        "titulo": "Farmacología de la insuficiencia vascular",
        "carrera": "Enfermería",
        "autor": "J. Flórez",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1wtLdAbLJzrQ_OdRx8RFi7j-MBPiQrgzv/view?usp=sharing"
    },
    {
        "autor": "Bateman Snell",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1bmEUFJXQqafhs4S3xYvSm9jQXwRZOOtT/view?usp=sharing",
        "titulo": "ADMINISTRACIÓN: Liderazgo y colaboración en un mundo competitivo <span class=\"libro-edicion\">8 ed</span>",
        "carrera": "Ingeniería en Informática"
    },
    {
        "autor": "Emmanuel Raufflet, José Felix Lozano, Ernesto Barrera",
        "titulo": "Responsabilidad Social Empresarial",
        "link": "https://drive.google.com/file/d/1F4o-_TtQi-hRk08rJ0NS03EXJLPozhZ_/view?usp=sharing",
        "carrera": "Contaduría Pública",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80",
        "autor": "Ricardo Maliandi",
        "link": "https://drive.google.com/file/d/1euvoeNjZBvFP63VrmC86MqAGdKJQ9RTt/view?usp=sharing",
        "titulo": "Ética: Conceptos y Problemas",
        "carrera": "Nutrición"
    },
    {
        "carrera": "Ingeniería en Informática",
        "titulo": "Problemas Elementales de Máximo y Mínimo",
        "link": "https://drive.google.com/file/d/1ao4FH7KFl2TX4IO3qHpH0JU2uMsPS9LW/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "autor": "I. P. Natansón"
    },
    {
        "autor": "J. Flórez",
        "carrera": "Enfermería",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1vCcaDnq75fatfkxDeViYL0oNWMkqfBge/view?usp=sharing",
        "titulo": "Fármacos hipouricemiantes y antigotosos"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Contaduría Pública",
        "link": "https://drive.google.com/file/d/1hBDxHcO3no5-LyzNNsZxbxCwhdIU1bG6/view?usp=sharing",
        "titulo": "Apuntes de Auditoría",
        "autor": "Juan Carlos Mira Navarro"
    },
    {
        "link": "https://drive.google.com/file/d/1RGtSetgyjtyxwSiTkhI9HQTh_OvkrN_y/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "S. Echevarría y A. Mediavilla",
        "carrera": "Enfermería",
        "titulo": "Fármacos antivíricos"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/11gHipMMhJczdTYr0DLySE9pm9MxsAEAZ/view?usp=sharing",
        "carrera": "Administración de Empresas",
        "titulo": "ADMINISTRACIÓN ESTRATÉGICA DE MARCA BRANDING <span class=\"libro-edicion\">3 ed</span>",
        "autor": "KEVIN LANE KELLER"
    },
    {
        "carrera": "Derecho",
        "titulo": "Los Puentes entre la Antropología y el Derecho: Orientaciones desde la Antropología Jurídica",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "autor": "Milka Castro Lucic",
        "link": "https://drive.google.com/file/d/1sv9W4-GPhvhciO6MvOfl0JCe0tlGOrM7/view?usp=sharing"
    },
    {
        "carrera": "Medicina",
        "titulo": "Atlas de Anatomía Patológica",
        "autor": "Robbins y Cotran",
        "imagen": "https://images.unsplash.com/photo-1559757175-5700efe6732a?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/10Fb7My3sJ41wEV6CfbWgqT2hg9QXLq7s/view?usp=sharing"
    },
    {
        "autor": "S/A",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1zygBxQZttUkecQ78eNGR5vByiMAJ0NOe/view?usp=sharing",
        "titulo": "LA APOLOGÍA DE SÓCRATES.",
        "carrera": "Derecho"
    },
    {
        "autor": "J. A. Amado y J. Flórez",
        "carrera": "Enfermería",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1R99POoBz7MhX-X70Sy_uLfGjlfduEg5R/view?usp=sharing",
        "titulo": "Expansores plasmáticos. Nutrición artificial"
    },
    {
        "titulo": "LA GESTIÓN Y LA ADMINISTRACIÓN PARA EL MAÑANA",
        "link": "https://drive.google.com/file/d/17dX8AgzXYhzNEGAsqSh1g_0t5z6_3cCT/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "carrera": "Administración de Empresas",
        "autor": "Harvard Business Review"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1r71rMHjjYBatD0MJSQWMWMEo_pVvBM5m/view?usp=sharing",
        "carrera": "Comercio Internacional",
        "titulo": "La Empresa Triunfadora: Problem Solving para empresas",
        "autor": "M.C. Mardone, R. Milanese, R. Prato Previde"
    },
    {
        "autor": "MARTHA ALLES",
        "carrera": "Psicología Organizacional",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1BqZ5nbjA-hay2ECYoKWinmNrJabtOvaG/view?usp=sharing",
        "titulo": "DESARROLLO DEL TALENTO HUMANO BASADO EN COMPETENCIAS"
    },
    {
        "titulo": "DICCIONARIO BÁSICO DE MARKETING DIGITAL PARA PYMES",
        "carrera": "Marketing y Gestión Comercial",
        "link": "https://drive.google.com/file/d/1tW8iSHUzj4wZD-6RcrWLchpZVjaO2ZBZ/view?usp=sharing",
        "autor": "S/A",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "carrera": "Ingeniería en Informática",
        "titulo": "Lecciones sobre Ecuaciones en Derivadas Parciales",
        "link": "https://drive.google.com/file/d/1WFwVUixsWQcY2fVyKPlYNsATIwp3qZQV/view?usp=sharing",
        "autor": "I. G. Petrovski",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "carrera": "Administración de Empresas",
        "autor": "Jorge Isauro Rionda Ramírez",
        "titulo": "Crecimiento Económico y Desarrollo Regional en México(1970 –  2010)",
        "link": "https://drive.google.com/file/d/15kxmAh5Uho9rOtkisUlbdKPv_F2A4c1h/view?usp=sharing"
    },
    {
        "titulo": "Farmacología clínica para enfermería",
        "link": "https://drive.google.com/file/d/18sEWZK2kUYU2UUe_l-UPVIfpS5OucBY-/view?usp=sharing",
        "carrera": "Enfermería",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Dr. José Manuel Mosquera González, Dr. Pedro Galdos Anuncibay"
    },
    {
        "autor": "Lic. Alejandro Salazar Ortega",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Marketing y Gestión Comercial",
        "link": "https://drive.google.com/file/d/1icT-w_4Hc98GKeNFXuvBOWSuHWetGzQx/view?usp=sharing",
        "titulo": "Temas selectos de matemáticas II"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "SANTIAGO GARCÍA ECHEVARRIA",
        "carrera": "Marketing y Gestión Comercial",
        "titulo": "INTRODUCCIÓN A LA ECONOMÍA DE LA EMPRESA <span class=\"libro-edicion\">2 ed</span>",
        "link": "https://drive.google.com/file/d/1c68CTUGhkLlcZ9C2WTayjDKZ9YGc9G8S/view?usp=sharing"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1i4v5IhnJg0RXxW44BLUuMysqHjuLoR5n/view?usp=sharing",
        "carrera": "Medicina",
        "titulo": "Reanimación Cardiopulmonar Avanzada",
        "autor": "Material de Referencia"
    },
    {
        "autor": "V. Litvinenko - A. Mordkóvich",
        "titulo": "Problemas Matemáticos – Álgebra y Trigonometría",
        "link": "https://drive.google.com/file/d/1-MOq5X5Xy4hOidOSFl9SdyYAQFuGrNc4/view?usp=sharing",
        "carrera": "Ingeniería en Informática",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "J. Flórez",
        "titulo": "Fármacos antiparasitarios I. Protozoos",
        "carrera": "Enfermería",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1_jSxFwtTurypYo8zhZiG9-mVXBfm1tA_/view?usp=sharing"
    },
    {
        "titulo": "Bioestadística para no estadísticos",
        "link": "https://drive.google.com/file/d/1RLUgkVnI3vyQrHm0GpKLRsZaJUxBb0Zz/view?usp=sharing",
        "autor": "Erik Cobo Valeri, et al.",
        "imagen": "https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&w=300&q=80",
        "carrera": "Medicina"
    },
    {
        "carrera": "Marketing y Gestión Comercial",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "María Virginia Baptista, María del Fátima León, César Mora",
        "titulo": "Neuromarketing: Conocer al cliente por sus persepciones",
        "link": "https://drive.google.com/file/d/1-c_wfYkkt4nMfe9dfPj6e3GZVRRIfm04/view?usp=sharing"
    },
    {
        "autor": "Carl Menger",
        "titulo": "Principios de Economía Política",
        "link": "https://drive.google.com/file/d/1uinNa0C8os7KZBScTmvUZGm6DqX7XTBR/view?usp=sharing",
        "carrera": "Administración de Empresas",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80"
    },
    {
        "carrera": "Marketing y Gestión Comercial",
        "titulo": "Aplica la Mezcla de Mercadotecnia en los pequeños negocios",
        "link": "https://drive.google.com/file/d/1ITdfsPYYYt__iWTRoFNmTvE8woyHMn2u/view?usp=sharing",
        "autor": "S/A",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "carrera": "Relaciones Internacionales",
        "titulo": "Geopolitics in the international market: A systematic review and research agenda",
        "link": "https://drive.google.com/file/d/1_bQhKkhmiDkhl4RAHRgN738_OXPHyTZO/view?usp=sharing",
        "autor": "Dajung Kim (et al)",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "CARLOS S. FAYT",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "carrera": "Derecho",
        "link": "https://drive.google.com/file/d/1YCVdNChAOLCZNpmbSP8FozT-9xDaNaGK/view?usp=sharing",
        "titulo": "DERECHO POLÍTICO: Tomo II <span class=\"libro-edicion\">9 ED</span>"
    },
    {
        "titulo": "Manual CTO de Medicina - Endocrinología <span class=\"libro-edicion\">4.ª EDICIÓN</span>",
        "link": "https://drive.google.com/file/d/191IFfJMyaATQBYWHd8c3FexRWG9fDBey/view",
        "imagen": "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=300&q=80",
        "carrera": "Medicina",
        "autor": "Manuel Luque Ramírez"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "M. A. Hurlé",
        "link": "https://drive.google.com/file/d/1Q1Qmvj_pqIBr5VtQrpeHH0oQFYUA0fhr/view?usp=sharing",
        "titulo": "Anestésicos locales",
        "carrera": "Enfermería"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "titulo": "CÓDIGO CIVIL DEL PARAGUAY: LEY N° 1183/85",
        "autor": "CONGRESO DE LA NACION PARAGUAYA",
        "carrera": "Derecho",
        "link": "https://drive.google.com/file/d/1MfuU4PrAChyU9HWxUeit0kYVdUf1jbBd/view?usp=sharing"
    },
    {
        "carrera": "Ingeniería en Informática",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "autor": "Moisés Lazaro",
        "link": "https://drive.google.com/file/d/1iHeBvJOYrQL4Ibkh7XhtwRkvJ8IyVwkE/view?usp=sharing",
        "titulo": "Matematica Basica"
    },
    {
        "link": "https://drive.google.com/file/d/1-qoN37IbCUVG36cJCcXw-PsItyoGOLRR/view",
        "imagen": "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=300&q=80",
        "titulo": "Anatomía Humana (Cabeza y Cuello) Rouviere <span class=\"libro-edicion\">TOMO 1</span>",
        "autor": "Henri Rouviere, André Delmas",
        "carrera": "Medicina"
    },
    {
        "autor": "I. Radunskaya",
        "carrera": "Ingeniería en Informática",
        "titulo": "El Fracaso de las Paradojas",
        "link": "https://drive.google.com/file/d/1DE5c6PDtbZvT_qnA-f6MaNcpSoaFEOcZ/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "S/A",
        "carrera": "Relaciones Internacionales",
        "titulo": "LA INTEGRACIÓN REGIONAL EN AMÉRICA LATINA: NUEVOS Y VIEJOS ESQUEMAS",
        "link": "https://drive.google.com/file/d/1yKjkuUL-KTOqbzJEnVaguQldv863FJsc/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/1X-DyCjmFtWZWitu_btsh74nufc78GGd7/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "titulo": "Historia Económica Mundial <span class=\"libro-edicion\">4 ed</span>",
        "autor": "R. CAMERON y L. NEAL",
        "carrera": "Administración de Empresas"
    },
    {
        "carrera": "Contaduría Pública",
        "titulo": "Casos de relaciones públicas y comunicación corporativa",
        "link": "https://drive.google.com/file/d/1b3z8AKbWidEn4mR5Pbv09ZpSfInXVk6M/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "Jordi Xifra,  Ferran Lalueza"
    },
    {
        "carrera": "Enfermería",
        "titulo": "Esteroides corticales y antiinflamatorios esteroideos",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "J. Flórez y J. A. Amado",
        "link": "https://drive.google.com/file/d/19vCIJPQTEirGO41EarVKtTlE0I4cpkcR/view?usp=sharing"
    },
    {
        "titulo": "El Método de Coordenadas",
        "link": "https://drive.google.com/file/d/1ncf2qqAG2umgajKAnX1GNbuxq3Tkp57Y/view?usp=sharing",
        "autor": "I. Gelfand - E. Glagolieva",
        "carrera": "Ingeniería en Informática",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "Material Visual",
        "link": "https://drive.google.com/file/d/1yUAL6xa173-jxE6hWpttV_TwmS6nxR6w/view",
        "titulo": "Miembro Inferior (Imágenes)",
        "carrera": "Medicina"
    },
    {
        "autor": "R. Wayne Mondy, Robert M. Noe",
        "titulo": "Administración de recursos humanos <span class=\"libro-edicion\">5 ed</span>",
        "carrera": "Administración de Empresas",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1wsBQmiFmypaagwopfrFliNSIwxhfw1ow/view?usp=sharing"
    },
    {
        "autor": "E. Galéev - V.Tijomírov",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería en Informática",
        "link": "https://drive.google.com/file/d/1k1-4-KSr_i9HDFz50CCS0YbaHuVESrFg/view?usp=sharing",
        "titulo": "Curso de la Teoría de Problemas Extremales"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1CZijaMPm2j-O1vKVUsZ-BzacRFv91WuC/view",
        "titulo": "Anatomía con Orientación Clínica (Variante) <span class=\"libro-edicion\">8.ª EDICIÓN</span>",
        "carrera": "Medicina",
        "autor": "Keith L. Moore"
    },
    {
        "carrera": "Ciencias Políticas",
        "titulo": "Actores internacionales y sistema internacional contemporáneo <span class=\"libro-edicion\">Vol. 43</span>",
        "autor": "FACULTAD DE DERECHO Y CIENCIAS POLÍTICAS.",
        "link": "https://drive.google.com/file/d/1PMwrLPY6QmqWnPnnYCw_H_ClM56SUXUD/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/1vHTDvq4krQp55cjn6HNcoJhEZBHT0P1G/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "titulo": "Dirección de ventas: Una visión integral",
        "autor": "Diego Monferrer Tirado (et al)",
        "carrera": "Administración de Empresas"
    },
    {
        "autor": "Ray H. Garrison, Eric W. Noreen, Peter C. Brewer",
        "titulo": "Contabilidad administrativa <span class=\"libro-edicion\">11 ed</span>",
        "carrera": "Marketing y Gestión Comercial",
        "link": "https://drive.google.com/file/d/1oYbvdqe915zDv_bp1hQ-f2kKVoUwDJvh/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1Q2x25AF96rbRdzKaJUN_Ks6-xgwHe9Od/view?usp=sharing",
        "titulo": "O PERATIONS AND S UPPLY C HAIN M ANAGEMENT",
        "carrera": "Relaciones Internacionales",
        "autor": "f.robert jacobs y richard b.chase"
    },
    {
        "autor": "R.D. Lockhart, G.E. Hamilton, F.W.Fyfe",
        "titulo": "ANATOMIA HUMANA",
        "carrera": "Nutrición",
        "link": "https://drive.google.com/file/d/1mus2Uopye4X1I2HZ040KlmfsxJtnXVdG/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/1q0CkAslrcrI1fICQCLTcMl1WITgRpsey/view?usp=sharing",
        "autor": "Mitchell, Kumar, Abbas y Aster",
        "imagen": "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=300&q=80",
        "carrera": "Medicina",
        "titulo": "Compendio de Robbins y Cotran Patología <span class=\"libro-edicion\">9ª EDICIÓN</span>"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "autor": "M. A. de Cos y J. Merino",
        "link": "https://drive.google.com/file/d/1MmbZMjSJEX16VionNDnwF8WxzMJJbeOb/view?usp=sharing",
        "titulo": "Fármacos inmunodepresores e inmunoestimuladores",
        "carrera": "Enfermería"
    },
    {
        "link": "https://drive.google.com/file/d/1wb_BL0eDJzKItYPR8_se6NlgzWu0vGEu/view?usp=sharing",
        "autor": "S/A",
        "carrera": "Ciencias Políticas",
        "titulo": "INTRODUCCIÓN A LAS TECNOLOGÍAS DE LA INFORMACIÓN Y COMUNICACIÓN <span class=\"libro-edicion\">PPT</span>",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/1U05BF2Pb26x1dd8E3rqcA0qHwqUpqB28/view?usp=sharing",
        "autor": "Robert T. Kiyosaki",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería en Informática",
        "titulo": "Segunda oportunidad: Reinventa tus finanzas y tu vida"
    },
    {
        "carrera": "Enfermería",
        "titulo": "Farmacología de la insuficiencia cardíaca II. Fármacos vasodilatadores, b-bloqueantes y diuréticos",
        "link": "https://drive.google.com/file/d/1JgugVU0ULqLNymJBcono7Ta1XbJq3mGz/view?usp=sharing",
        "autor": "J. Tamargo y E. Delpón",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1vtu7Qhzq5R1OZ1QTYh_CRQcC48Lu_dQm/view?usp=sharing",
        "titulo": "Metodología de la Investigación <span class=\"libro-edicion\">4 ed</span>",
        "carrera": "Contaduría Pública",
        "autor": "Sampieri, Collado y Lucio"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1uW63vhdq8TQcxRZHa32XwMF4ZGWSB7Ol/view?usp=sharing",
        "carrera": "Comercio Internacional",
        "titulo": "Administración: Escuelas, proceso administrativo, áreas funcionales y desarrollo emprendedor",
        "autor": "Lourdes Münch"
    },
    {
        "carrera": "Derecho",
        "titulo": "Fragmentos de antropología anarquista",
        "link": "https://drive.google.com/file/d/11CgEo5D3T9zl4w55JTTScH0D0-0WXq9B/view?usp=sharing",
        "autor": "David Graeber",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "Stephen A. Ross, Randolph W. Westerfield, Bradford D. Jordan",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Contaduría Pública",
        "link": "https://drive.google.com/file/d/1fyAWZPdI-KHD6RskOn7vkNpYqm6xyZU0/view?usp=sharing",
        "titulo": "Fundamentos de finanzas corporativas <span class=\"libro-edicion\">9 ed</span>"
    },
    {
        "link": "https://drive.google.com/file/d/1sH5fP3b6W6isDuMh-Kyeb-JAV13oj4_Q/view?usp=sharing",
        "autor": "Rohen - Yokochi",
        "titulo": "Atlas de Anatomia HUmana: Un estudio Fotografico del cuerpo Humano <span class=\"libro-edicion\">6° Edición</span>",
        "carrera": "Medicina",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        "carrera": "Relaciones Internacionales",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1dakT0uKhZ0WQCe-0gL_tNTYZTPLnPPSu/view?usp=sharing",
        "autor": "Leonel Pereznieto Castro y Jorge Alberto Silva Silva",
        "titulo": "Derecho Internacional Privado <span class=\"libro-edicion\">oxford</span>"
    },
    {
        "titulo": "Introductory Mathematical Analysis for Business...",
        "carrera": "Ingeniería en Informática",
        "link": "https://drive.google.com/file/d/1A2Kn2zYfsVDhfSnis1mkhBrA59M2Vtfp/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "autor": "Ernest F. Haeussler"
    },
    {
        "autor": "MARGARET MEAD",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
        "carrera": "Derecho",
        "link": "https://drive.google.com/file/d/1wYsOiLLLcHAzqfhIBy_DIFceFFbF2KrL/view?usp=sharing",
        "titulo": "ANTROPOLOGÍA, LA CIENCIA DEL HOMBRE"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/107_FHByCfeas7EAo1EEkgyx2PnAzAczD/view?usp=sharing",
        "titulo": "PROBLEMAS DE VECTORIAL",
        "autor": "Material Académico",
        "carrera": "Ingeniería en Informática"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1puEBe70UWfg3mOGsz0pmmf88vXa3UJsl/view?usp=sharing",
        "titulo": "Marketing internacional <span class=\"libro-edicion\">14 ED</span>",
        "carrera": "Marketing y Gestión Comercial",
        "autor": "Phillip R. Cateora, Mary C.Gilly, John L. Graham"
    },
    {
        "titulo": "Cómo preparar un plan de negocios exitoso",
        "carrera": "Contaduría Pública",
        "autor": "Greg Balanko-Dickson",
        "link": "https://drive.google.com/file/d/1sPNYMSadDSLeEy1VJnoAzE16ob2mMpbP/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/1FWDXWTbV0nW618hvtTOJGp0bRr1_K9sO/view?usp=sharing",
        "autor": "Frank Suarez",
        "titulo": "Recetas: EL poder del metabolismo",
        "carrera": "Nutrición",
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "M. A. Hurlé",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "titulo": "Fármacos antiasmáticos y broncodilatadores",
        "link": "https://drive.google.com/file/d/1XhqPL_wxsAtQ7QS8vuhMZDSxMlAK8YyU/view?usp=sharing",
        "carrera": "Enfermería"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "carrera": "Administración de Empresas",
        "link": "https://drive.google.com/file/d/1IEsxkFWf918WacyEvTUV4G3NeOEiiwTL/view?usp=sharing",
        "titulo": "ADMINISTRACIÓN <span class=\"libro-edicion\">12ed</span>",
        "autor": "Stephen P. Robbins, Mary Coulter"
    },
    {
        "link": "https://drive.google.com/file/d/1V-hegT18zfUDNMoecR5H1qYcslkCF9hS/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "autor": "Raquel Coello Cremades con la colaboración de Amaia Pérez Orozco",
        "carrera": "Administración de Empresas",
        "titulo": "CÓMO TRABAJAR LA ECONOMÍA DE LOS CUIDADOS DESDE LA COOPERACIÓN INTERNACIONAL PARA EL DESARROLLO. APORTES DESDE LA CONSTRUCCIÓN COLECTIVA"
    },
    {
        "autor": "DEUSTO",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Marketing y Gestión Comercial",
        "link": "https://drive.google.com/file/d/1WQ0eIK20Tm5ivq4cljDzmrNd-AXtjEgH/view?usp=sharing",
        "titulo": "COMO HABLAR EN PUBLICO"
    },
    {
        "link": "https://drive.google.com/file/d/12Hs_GZ3H59A4CBggRtf09eXuy3srN08z/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "titulo": "Dirección de la producción y de operaciones: Decisiones tácticas",
        "carrera": "Comercio Internacional",
        "autor": "Jay Heizer, Barry Render"
    },
    {
        "link": "https://drive.google.com/file/d/1lyJBuvlBYige2wrElcRV9pJXCOO2Ji8c/view?usp=sharing",
        "carrera": "Enfermería",
        "autor": "J. M. Baeyens",
        "imagen": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
        "titulo": "Fármacos antianginosos"
    },
    {
        "carrera": "Nutrición",
        "autor": "Salvador Badui Dergal",
        "imagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1knFYzRIdbk4u-0rPDtEjBraZhJBNdUA2/view?usp=sharing",
        "titulo": "Química de los Alimentos <span class=\"libro-edicion\">4ed</span>"
    },
    {
        "carrera": "Ingeniería en Informática",
        "link": "https://drive.google.com/file/d/18MO5Qmgyd34AmElEZ4iQBVbi6ZbxSd1M/view?usp=sharing",
        "titulo": "Geometria Analitica",
        "autor": "Lehmann",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80"
    },
    {
        "carrera": "Marketing y Gestión Comercial",
        "link": "https://drive.google.com/file/d/1-olRFVF3JowV74StsnvSdOqMTdFOyKsX/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "Sanaya Roman y Duane Packer",
        "titulo": "Cómo crear dinero"
    },
    {
        "titulo": "FUNDAMENTOS DE LA DIRECCIÓN DE EMPRESAS",
        "carrera": "Administración de Empresas",
        "autor": "Juan Antonio Pérez López",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1u2GK97vKyl6pl9k7CyA4SQs7Ow-NxDTu/view?usp=sharing"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1gXAqzsJHWoROHivDdRnCAZNHUHU_iWJc/view?usp=sharing",
        "titulo": "HISTORIA DIPLOMATICA DEL PARAGUAY",
        "autor": "S/A",
        "carrera": "Relaciones Internacionales"
    },
    {
        "link": "https://drive.google.com/file/d/1HFp-v6HaIZ_I8OOVJpuBwWYTrrL3XZDs/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería en Informática",
        "titulo": "Introducción a los Métodos Numéricos",
        "autor": "A.A. Samarski"
    },
    {
        "link": "https://drive.google.com/file/d/1_8pezrfhRECCe-qXoSyr6Qf_DUBwhfO8/view?usp=sharing",
        "autor": "JOSÉ IGNACIO CABRAL",
        "titulo": "Cómo Crear Ideas Millonarias",
        "carrera": "Marketing y Gestión Comercial",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "autor": "Sergio Álvarez Ducoing",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "carrera": "Administración de Empresas",
        "link": "https://drive.google.com/file/d/1-epL-6ixqeTkUBNbU4FbeDGf5lfoJ5Lh/view?usp=sharing",
        "titulo": "Jungla empresarial: Aprende a lidiar con el safari de la vida para alcanzar el exito"
    },
    {
        "titulo": "Geografia Mundial Contemporanea",
        "carrera": "Relaciones Internacionales",
        "autor": "S/A",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/14dZohTKciuU6X2D8Hs1lakgHolin2gYY/view?usp=sharing"
    },
    {
        "link": "https://drive.google.com/file/d/1hHVIhah0-W8wbhO_AjpfOUTp9v92WuEw/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "carrera": "Ingeniería en Informática",
        "autor": "Moisés Lázaro",
        "titulo": "Vectores R2 Y R3"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=300&q=80",
        "carrera": "Medicina",
        "link": "https://drive.google.com/file/d/12qhQfq7yIlQ6es-J-lwNZcgKOHhu_GLi/view",
        "titulo": "Anatomía con Orientación Clínica <span class=\"libro-edicion\">8ª EDICIÓN</span>",
        "autor": "Keith L. Moore, Arthur F. Dalley, Anne M. R. Agur"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1B72gcRHtEazA54TszrLgr5bJAo2vrOhW/view?usp=sharing",
        "titulo": "Problemas de Álgebra Superior",
        "autor": "D. Faddieev - I. Sominski",
        "carrera": "Ingeniería en Informática"
    },
    {
        "autor": "PIERRE LÉVY",
        "carrera": "Derecho",
        "titulo": "INTELIGENCIA COLECTIVA",
        "link": "https://drive.google.com/file/d/13nqqkDHQeajrcy8M0lu-0oEk_vSsiWDR/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80"
    },
    {
        "titulo": "Anatomía con Orientación Clínica <span class=\"libro-edicion\">4ª EDICIÓN</span>",
        "carrera": "Medicina",
        "imagen": "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=300&q=80",
        "autor": "Keith L. Moore, Arthur F. Dalley",
        "link": "https://drive.google.com/file/d/1IrQb5lfVQKHQcDkYrqizGSd_-B4kwmMH/view"
    },
    {
        "titulo": "LA ECONOMÍA EN LOS PROGRAMAS DE NEGOCIOS",
        "autor": "Ricardo Chica",
        "link": "https://drive.google.com/file/d/1Uq0LCCisAAZJEvPC7-LOGhmUZN4E2rWW/view?usp=sharing",
        "carrera": "Marketing y Gestión Comercial",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Marketing y Gestión Comercial",
        "link": "https://drive.google.com/file/d/1EOrGB5I_ow9YGMdvZRu-ZfDm9ol5Vjzw/view?usp=sharing",
        "titulo": "COMO CREAR MEGANICHOS 2",
        "autor": "ALEJANDRO LEMIR"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/116XSr1dbZ1zGG2L29gX6VHFeZJRiEkFv/view?usp=sharing",
        "autor": "Material Educativo",
        "titulo": "Leyes de exponentes - Ecuaciones Exponenciales",
        "carrera": "Ingeniería en Informática"
    },
    {
        "titulo": "LOS PROCESOS DE INTEGRACIÓN EUROLATINOAMERICANOS",
        "link": "https://drive.google.com/drive/folders/1hKEe3Qaf7DvVA1k7Ks87N2iVlQPmrhNR?hl=es-419",
        "autor": "S/A",
        "carrera": "Relaciones Internacionales",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "link": "https://drive.google.com/file/d/1klnlCs7KUgqeu9o7xTHe65K1XLsJBwZ6/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Relaciones Internacionales",
        "autor": "MARCO GERARDO MONROY CABRA",
        "titulo": "DERECHO INTERNACIONAL PÚBLICO <span class=\"libro-edicion\">5°ED</span>"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1J_IgpcI4C4422tub33uc_7CVZOonDIuO/view?usp=sharing",
        "carrera": "Ingeniería en Informática",
        "titulo": "Puntos Fijos",
        "autor": "Yu. Shashkin"
    },
    {
        "autor": "Tronco, vísceras, extremidades inferiores",
        "titulo": "Sobatta Atlas Anatomía Humana <span class=\"libro-edicion\">TOMO 2</span>",
        "carrera": "Medicina",
        "link": "https://drive.google.com/file/d/1-Tox1lzrOtFFGX-GUvuozyKOFg5w3G2M/view",
        "imagen": "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=300&q=80"
    },
    {
        "titulo": "Asertividad para negociar: El arte de negociar",
        "link": "https://drive.google.com/file/d/1HiaIeOzEhj7xyshX-z12-zk5_QnvhcQl/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "carrera": "Contaduría Pública",
        "autor": "Mauro Rodríguez Estrada y Martha Serralde"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1A1B8TSGcClzMlQ5VpUyX2Flga8viL4iQ/view?usp=sharing",
        "titulo": "División de figuras en partes menores",
        "carrera": "Ingeniería en Informática",
        "autor": "V. Boltianski - I. Gojberg"
    },
    {
        "carrera": "Ciencias Políticas",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1pHlabq6kUJkHrO47Vb1bM20qMU5i1MnB/view?usp=sharing",
        "autor": "Lic. Ana María",
        "titulo": "GUERRA ENTRE BOLIVIA Y PARAGUAY: 1928-1935"
    },
    {
        "autor": "Diane E. Papalia, Sally Wendkos Olds, Ruth Duskin Feldman",
        "carrera": "Contaduría Pública",
        "titulo": "Desarrollo Humano <span class=\"libro-edicion\">11 ed</span>",
        "link": "https://drive.google.com/file/d/1JINDyq6CzVekgX9YvodboHv17DfBHnJw/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1Dyu3sDFCMqhtN-LfTFfV2Zi9UtvD9EmD/view?usp=sharing",
        "titulo": "Cómo convertir con éxito tu sueño en una empresa",
        "carrera": "Marketing y Gestión Comercial",
        "autor": "Fernando Jáuregui & Lourdes Carmona"
    },
    {
        "autor": "Moisés Lázaro",
        "titulo": "Relaciones y Funciones",
        "link": "https://drive.google.com/file/d/1oWSZeoZzMypCdoV007NB5Y2xeCne_xss/view?usp=sharing",
        "carrera": "Ingeniería en Informática",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80"
    },
    {
        "carrera": "Marketing y Gestión Comercial",
        "link": "https://drive.google.com/file/d/13ydnZ2wpaAVnyP-hNsuLD6owxcb3m346/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "autor": "S/A",
        "titulo": "EL CICLO CONTABLE"
    },
    {
        "link": "https://drive.google.com/file/d/1mc_5cApyEQcdHD5dv9u5Gk1BTxS56ZrL/view?usp=sharing",
        "imagen": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
        "autor": "Álvaro López Cabrales, Susana Pasamar y Ramón Valle Cabrera",
        "carrera": "Administración de Empresas",
        "titulo": "Fundamentos para la gestión estratégica de los recursos humanos"
    },
    {
        "autor": "A. I. Markushévich",
        "carrera": "Ingeniería en Informática",
        "imagen": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1JA6cvG0GUumwgQb4VmESkKooGFsH-TP2/view?usp=sharing",
        "titulo": "Curvas Maravillosas y Números Complejos"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
        "link": "https://drive.google.com/file/d/1olWv74WeBDieMgtVlerQdTfxBSVItvQE/view?usp=sharing",
        "titulo": "5 PASOS para transformar una oficina de personal en un área de Recursos Humanos",
        "autor": "MARTHA ALICIA ALLES",
        "carrera": "Marketing y Gestión Comercial"
    },
    {
        "imagen": "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=300&q=80",
        "autor": "Material de Estudio",
        "titulo": "Tórax",
        "link": "https://drive.google.com/file/d/1KkUn7e6JIHanlWuzJk4ac9gvunvVrzC2/view?usp=sharing",
        "carrera": "Medicina"
    }
];

const simuladoresGlobales = [
    {
        "titulo": "Aprende a Programar",
        "facultad": "Facultad de Ingeniería",
        "link": "https://www.w3schools.com/",
        "autor": "La meta principal de W3Schools es enseñar a escribir código de manera práctica, directa y progresiva para que cualquier persona pueda aprender tecnologías web"
    },
    {
        "autor": "técnicos, docentes e investigadores del Departamento de Histología y Embriología, Facultad de Medicina, Universidad de la República. Montevideo, Uruguay",
        "titulo": "Microscopio virtual",
        "link": "https://microscopiovirtual.fmed.edu.uy/",
        "facultad": "Facultad de Salud"
    }
];
