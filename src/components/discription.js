const plantDiseases = [
    {
      name: "Apple___Apple_scab",
      description:
        "Apple scab is a fungal disease caused by *Venturia inaequalis*. It appears as dark, olive-colored spots on leaves and fruit, reducing fruit quality and causing premature leaf drop. It thrives in wet, cool climates.",
    },
    {
      name: "Apple___Black_rot",
      description:
        "Black rot is caused by the fungus *Botryosphaeria obtusa*. It causes dark, sunken lesions on apples and leaves, as well as limb cankers. It can severely reduce fruit yield and quality.",
    },
    {
      name: "Apple___Cedar_apple_rust",
      description:
        "A fungal disease that alternates between apple and cedar trees. On apples, it creates bright orange spots on leaves and can cause premature defoliation and fruit deformity.",
    },
    {
      name: "Apple___healthy",
      description:
        "The apple tree shows no signs of fungal or bacterial infections. Leaves are green, and fruits are developing normally.",
    },
    {
      name: "Cherry_(including_sour)___Powdery_mildew",
      description:
        "Powdery mildew appears as a white or grayish powder on leaves, shoots, and fruits. It can distort growth and reduce cherry fruit quality if left untreated.",
    },
    {
      name: "Cherry_(including_sour)___healthy",
      description: "The cherry tree is healthy, with green leaves and no signs of mildew, blight, or pests.",
    },
    {
      name: "Chili__healthy",
      description: "The chili plant is growing vigorously, with no signs of leaf damage, discoloration, or disease.",
    },
    {
      name: "Chili__leaf curl",
      description:
        "A viral or pest-induced disorder that causes the leaves to curl upward or downward. It stunts growth and affects fruit production.",
    },
    {
      name: "Chili__leaf spot",
      description:
        "Leaf spot causes small, round, brown or black lesions on leaves. It's often due to fungal or bacterial pathogens and can spread rapidly under moist conditions.",
    },
    {
      name: "Chili__whitefly",
      description:
        "Whiteflies are sap-sucking insects that weaken the plant and transmit viruses. Infestation results in yellowing and stunted growth.",
    },
    {
      name: "Chili__yellowish",
      description:
        "General yellowing of leaves, often due to nutrient deficiency, root stress, or viral infection. It can affect the plant's vigor and fruit yield.",
    },
    {
      name: "Coffee__Rust",
      description:
        "Coffee leaf rust, caused by *Hemileia vastatrix*, is a major disease producing yellow-orange powdery lesions under the leaves. It leads to early defoliation and yield loss.",
    },
    {
      name: "Coffee__healthy",
      description: "Coffee plant is healthy with dark green leaves and no signs of rust, pests, or leaf spots.",
    },
    {
      name: "Coffee__red spider mite",
      description:
        "Red spider mites feed on the underside of coffee leaves, causing speckled discoloration and defoliation in severe cases. Leaves appear dusty or silvery.",
    },
    {
      name: "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot",
      description:
        "A fungal disease caused by *Cercospora zeae-maydis*, resulting in elongated grayish-brown lesions. It hinders photosynthesis and lowers grain yield.",
    },
    {
      name: "Corn_(maize)___Common_rust_",
      description:
        "Common rust appears as reddish-brown pustules on leaves caused by *Puccinia sorghi*. Severe infections can cause leaf death and reduce kernel size.",
    },
    {
      name: "Corn_(maize)___Northern_Leaf_Blight",
      description:
        "Caused by *Exserohilum turcicum*, this disease leads to large, cigar-shaped lesions on leaves. It can significantly reduce photosynthesis and grain yield.",
    },
    {
      name: "Corn_(maize)___healthy",
      description: "Corn plant appears vigorous and disease-free with upright, green leaves and no signs of infection.",
    },
    {
      name: "Grape___Black_rot",
      description:
        "Black rot of grape, caused by *Guignardia bidwellii*, produces circular brown leaf spots and shrivels black fruit, reducing market quality.",
    },
    {
      name: "Grape___Esca_(Black_Measles)",
      description:
        "Esca is a complex fungal disease that causes internal wood decay, black lines on berries, and 'tiger stripe' leaf patterns. It can kill vines over time.",
    },
    {
      name: "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)",
      description:
        "Fungal leaf spot disease showing irregular brown spots with yellow halos. It weakens the plant and increases susceptibility to other pathogens.",
    },
    {
      name: "Grape___healthy",
      description: "Grape vine is healthy, with vibrant green leaves and plump fruit clusters forming correctly.",
    },
    {
      name: "Peach___Bacterial_spot",
      description:
        "Caused by *Xanthomonas campestris*, bacterial spot leads to black specks and pits on leaves and fruit, often causing early leaf drop and fruit blemishes.",
    },
    {
      name: "Peach___healthy",
      description: "Peach tree is in excellent condition, free of blight, pests, or deformities.",
    },
    {
      name: "Pepper,_bell___Bacterial_spot",
      description:
        "This bacterial infection causes water-soaked lesions that turn brown on leaves and fruit. It lowers fruit quality and yield in bell peppers.",
    },
    {
      name: "Pepper,_bell___healthy",
      description: "Bell pepper plant is free of bacterial or fungal infections, with firm, shiny fruit.",
    },
    {
      name: "Potato___Early_blight",
      description:
        "Caused by *Alternaria solani*, early blight results in dark spots with concentric rings and usually starts on lower leaves, moving upward.",
    },
    {
      name: "Potato___Late_blight",
      description:
        "A destructive disease caused by *Phytophthora infestans*. It creates water-soaked lesions and can destroy entire crops if not controlled early.",
    },
    {
      name: "Potato___healthy",
      description: "Potato foliage is lush green with no evidence of blight, pests, or discoloration.",
    },
    {
      name: "Strawberry___Leaf_scorch",
      description:
        "A fungal disease resulting in marginal leaf browning and necrosis. It can lower photosynthesis and affect berry production.",
    },
    {
      name: "Strawberry___healthy",
      description: "Strawberry plant is thriving, with dark green leaves and vibrant flowers or fruit.",
    },
    {
      name: "Tomato___Bacterial_spot",
      description:
        "Tiny water-soaked lesions appear on leaves and fruit, often merging into larger necrotic patches. Caused by *Xanthomonas spp.*",
    },
    {
      name: "Tomato___Early_blight",
      description:
        "Starts as concentric-ring dark spots on lower leaves. Leaves may yellow and fall off. Caused by *Alternaria solani*.",
    },
    {
      name: "Tomato___Late_blight",
      description:
        "Aggressive fungal disease caused by *Phytophthora infestans*, producing brown-black lesions on leaves, stems, and fruit. Can destroy crops rapidly.",
    },
    {
      name: "Tomato___Leaf_Mold",
      description:
        "Yellowish patches on upper leaf surfaces and fuzzy mold on the undersides. Thrives in warm, humid environments.",
    },
    {
      name: "Tomato___Septoria_leaf_spot",
      description:
        "Tiny, dark-bordered circular spots that cause premature defoliation. Caused by *Septoria lycopersici*.",
    },
    {
      name: "Tomato___Spider_mites Two-spotted_spider_mite",
      description:
        "Tiny mites feed on leaf undersides, causing a speckled appearance and fine webbing. Severe infestations cause leaf drop.",
    },
    {
      name: "Tomato___Target_Spot",
      description:
        "Circular lesions with concentric rings and a dark center, often surrounded by yellow. Caused by *Corynespora cassiicola*.",
    },
    {
      name: "Tomato___Tomato_Yellow_Leaf_Curl_Virus",
      description:
        "Virus transmitted by whiteflies, causing leaf curling, yellowing, stunted growth, and reduced fruit yield.",
    },
    {
      name: "Tomato___Tomato_mosaic_virus",
      description:
        "Causes mottling, distortion, and stunted growth in tomato plants. Spread via infected tools and hands.",
    },
    {
      name: "Tomato___healthy",
      description: "Tomato plant is in perfect health, with green leaves and developing fruit with no signs of disease.",
    },
  ];
  
  export default plantDiseases;
  