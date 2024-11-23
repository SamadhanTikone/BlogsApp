import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { Button } from "@mui/material";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import SectionA from "./SectionA";
import SectionB from "./SectionB";
import Divider from '@mui/material/Divider';
import javaImage from './assets/java-svgrepo-com.svg'; // Imported image
import servicesIcon from './assets/services-svgrepo-com.svg'; // Imported image

function Home() {
    const services = [
        "Advanced Analytics", "Artificial Intelligence", "Automation", "Cloud", "Services",
        "Business Process", "Connected Intelligence and AI", "Digital Consulting", "Digital CX",
        "Digital Engineering Services", "Digital Operations", "Linkedin"
    ];

    return (
        <>
            <div className="mb-24">
                <div className={`${styles.main} relative`}>
                    <div className="absolute inset-0 bg-black opacity-60 rounded-[20px]"></div>

                    <div className="h-screen mt-12 flex justify-between items-center rounded-[20px]">
                        <div className="z-10">
                            <span className="block text-6xl font-bold uppercase leading-normal opacity-100 text-white text-left ml-24">
                                Innovative Solutions for a <span className="text-orange-600 rounded-xl">Digital World</span>
                            </span>

                            <Link to={"/contact"}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        float: "left",
                                        margin: "20px 100px",
                                        borderRadius: "10px",
                                        padding: "10px 18px"
                                    }}
                                >
                                    Get Started <DoubleArrowIcon />
                                </Button>
                            </Link>
                        </div>

                        <div className="z-10 w-[1200px]">
                            {/* Corrected path for the image */}
                            <img src="/vite.svg" alt="Solution" />
                        </div>
                    </div>
                </div>

                <div className="mt-28 relative h-[80vh] w-full flex justify-center items-center flex-wrap">
                    <div>
                        <h1 className="text-3xl font-bold uppercase block float-left">
                            WE are in Home <span className="text-orange-600">Component,</span>
                        </h1>
                        <p className="w-full text-left text-lg mt-12">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                        </p>

                        {/* Corrected the image source */}
                        <img src={javaImage} alt="Java" className="z-10 w-24 float-right right-0" />
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold uppercase float-center text-orange-500">
                            We Provide {" "}
                        </h2>

                        {/* Corrected image source */}
                        <img src={servicesIcon} alt="" className="w-24 float-left absolute z-10" />

                        <div className="flex flex-wrap justify-center items-center">
                            {services.map((service, index) => {
                                return (
                                    <div key={index} className="flex flex-col w-1/2 p-2">
                                        <Link to={"/"} className="text-xl font-semibold text-left ml-56">
                                            -> {service}
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                        <img src={javaImage} alt="" className="z-10 w-24 left-[50%] bottom-0 absolute" />
                    </div>
                </div>
            </div>

            <Divider sx={{ borderBlockColor: "white", marginBottom: "10px" }} />

            <div>
                <h1 className="text-5xl font-bold uppercase mb-4">Top <span className="text-orange-600">Specific</span></h1>
                <p><SectionA /></p>
                <Divider sx={{ borderBlockColor: "white", margin: "20px 0px" }} />
                <p><SectionB /></p>
                <Divider sx={{ borderBlockColor: "white", margin: "20px 0px" }} />
            </div>
        </div>
        </>
    );
}

export default Home;
