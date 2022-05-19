import OpenetLogo from '../../assets/Openet-Amdocs-2.png'
import NCRLogo from '../../assets/NCR_Brand_Block_Logo_PNG.png'
import HAM10000 from '../../assets/dataset-card.png'
import Igem from '../../assets/igem-page.png'
import SCR from '../../assets/SeeCodeRunSS.png'
import Photon from '../../assets/photon.svg'
import EcoCar from '../../assets/ecocar_gt.png'

export const content = [
    {
        title: "HAM10000 Skin Classification",
        timeframe: "Fall 2021",
        accessoryText: "ML Course Project",
        bullets: [
            "Utilized CNNs to classify 6 skin lesions from microscope images with >70% accuracy",
            "Explored deep learning netwrok architectures and evaluated our model against state-of-the-art image models",
            "Compared image-based lesion classification with classification over other patient attributes using the decision tree model"
        ],
        technology: ["python3", "tensorflow"],
        backgroundImg: HAM10000,
        link: "https://varun-kulkarni.github.io/CS-4641/"
    },
    {
        title: "Retail Gamification",
        timeframe: "Summer 2021",
        accessoryText: "Internship Project",
        bullets: [
            "Developed a proof of concept for a retail gamification app, where consumers can subscribe to retailers' rewards programs that give them perks based on sharing shopping activity with friends",
            "Created NestJS backend and supported a React Native frontend with data from Google Cloud SQL",
            "Was able to mock user data, shopping activity, products from retailer, and social connections of users",
            "Demoed current features to NCR executives and business leaders and showed a Figma user flow to describe the vision of the whole application"
        ],
        technology: ["react", "nestjs", "js", "gcp", "ios"],
        backgroundImg: NCRLogo
    },
    {
        title: "ODF - Openet Data Fabric",
        timeframe: "Summer 2020 - Winter 2021",
        accessoryText: "Internship Project",
        bullets: [
            "Used Kafka to implement an end-to-end ingestion, aggregation, and distribution pipeline for 3G and 4G cellular network data",
            "Enriched data streams with per-customer data and provided customized output to billing systems and CRM",
            "Reduced time to move records from source to sink (CRM, other internal and external databases) by 40%",
            "Demonstrated data stream aggregation using visualizations in Grafana and deployed in an Openshift Kubernetes environment using Jenkins CI/CD for testing"
        ],
        // technology: [
        //     "kafka", "kubernetes", "linux", "elasticsearch", "jenkins", "git","javascript", "grafana" 
        // ],
        technology: [
            "kafka"
        ],
        backgroundImg: OpenetLogo,
        buttons: [
            {
                "title": "Openet Home",
                "href": "https://www.openet.com"
            }
        ],
    },
    {
        title: "EcoCAR Mobility Challenge",
        timeframe: "Fall 2019 - Winter 2020",
        accessoryText: "Research",
        bullets: [
            "Transformed a standard Chevrolet Blazer into a hybrid-electric, semi-autonomous vehicle",
            "Applied sensor fusion algorithms in Matlab to aggregate data vehicle internal and external sensors, radars, and cameras and detect cars, objects, and hazards",
            "Specific work done in sensor fusion for blind-spot detection"
        ],
        technology: [],
        backgroundImg: EcoCar
    },
    {
        title: "COMP - Centralized Operations Management Platform",
        timeframe: "Summer 2019",
        accessoryText: "Internship Project",
        bullets: [
            "Utilized the Elastic Stack to to create a detailed monitoring dashboard for cellular network availability and traffic measurement",
            "Presented Grafana and Kibana dashboards to a client that handles over 1.2 million active subscribers yearly",
            "Conducted performance testing on 3G and 4G networks using JMeter at up to 2000 concurrent transactions/sec, and used that data to test visualizations",
            "Elastic-based momitoring solution was eventually accepted by the client as part of a multi-million dollar contract"
        ],
        backgroundImg: OpenetLogo,
        technology: [],
        buttons: [
            {
                "title": "Openet Home",
                "href": "https://www.openet.com"
            }
        ]
    },
    {
        title: "Rock Ridge iGEM Website",
        timeframe: "2018",
        accessoryText: "School Project",
        bullets: [
            "Full function website for Rock Ridge High School's 2018 iGEM team, developed while working on synthetic biology experiments",
            "A strong candidate for final website, was not deployed due to  biology project delays preventing us from competing",
            "First exposure to advanced frontend techniques, SVG, and animation"
        ],
        backgroundImg: Igem,
        technology: []
    },
    {
        title: "SeeCodeRun",
        timeframe: "Summer 2017",
        accessoryText: "Summer Internship Project @ GMU CS",
        backgroundImg: SCR, 
        technology: [],
        bullets: [
            "Aided in exploration of features for early iterations an online, live development environment for web, with additional features that address common problems faced by JS developers as revealed by large-scale university study",
            "Editor color codes user's select queries from jQuery and other frameworks to their exact DOM elements to establish a direct relation between code and output, aiding in debugging",
            "Presented at Loudoun Regional Science Fair in 2018 and was recognized by IEEE Northern Virginia"
        ]
    },
    {
        title: "Photon",
        timeframe: "Summer 2016",
        accessoryText: "HS Comp Sci + Summer Project",
        backgroundImg: Photon, 
        technology: [],
        bullets: [
            "Productivity app interfacing with the iOS Calendar to create tasks in a to-do list, schedule them for specified work hours, and view scheduled tasks for the next 3 hours",
            "Implemented UI inspired by AccuWeather (for a future event view), Todoist, and other known apps to create a clean user interface for scheduling and managing tasks",
            "Released on the app store and accumulated over 1000 downloads"
        ]
    }
]