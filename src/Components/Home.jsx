import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { Button } from "@mui/material";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import SectionA from "./SectionA";
import SectionB from "./SectionB";
import Divider from '@mui/material/Divider';


function Home() {
    const services = [
        "Advanced Analytics",

        "Artificial Intelligence",
        "Automation",
        "Cloud",
        "Services",
        "Business Process",
        "Connected Intelligence and AI",
        "Digital Consulting",
        "Digital CX",
        "Digital Engineering Services",
        "Digital Operations",
        "Linkedin",
    ];
    return (
        <>
        <div className=" mb-24">
            <div className={`${styles.main}  relative`}>
                <div className="absolute inset-0 bg-black opacity-60 rounded-[20px]"></div>

                <div className="h-screen mt-12 flex justify-between items-center   rounded-[20px] ">
                    <div className="  z-10 ">
                        <span className=" block text-6xl font-bold uppercase leading-normal opacity-100 text-white text-left ml-24">
                            Innovative Solutions for a <span className="text-orange-600  rounded-xl ">Digital World</span>
                        </span>

                        <Link to={"/contact"}>
                            {" "}
                            <Button
                                variant="contained"
                                sx={{ float: "left", margin: "20px 100px ", borderRadius:"10px", padding:"10px 18px" }}
                            >
                                Get Started <DoubleArrowIcon />
                            </Button>
                        </Link>
                    </div>

                    <div className="z-10 w-[1200px]">  <img src="src/assets/Business Plan-amico.svg" alt="react" /></div>
                </div>

               

            </div>

            <div className="">
                <div
                    className={`flex justify-center items-center flex-wrap mt-28 relative h-[80vh] w-full `}
                >
                    <div>
                        <h1 className="text-3xl font-bold uppercase  block  float-left">
                            WE are in Home <span className="text-orange-600">Component,</span>
                        </h1>
                        <p className="w-full  text-left text-lg mt-12">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Praesentium aut id iure alias doloribus et dolor possimus qui
                            soluta, quidem fugiat libero quasi ea veritatis quod, eligendi
                            adipisci facilis harum Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Quaerat molestiae aspernatur, non quas est sit
                            voluptatibus totam asperiores molestias ad illum debitis sapiente
                            aliquam, distinctio perferendis placeat recusandae. Fugiat
                            voluptatum ratione quae laborum perferendis error cumque corrupti
                            asperiores fuga unde? incidunt deserunt? Ratione dolores
                            dignissimos ad, odit nemo aperiam provident. Lorem ipsum, dolor
                            sit amet consectetur adipisicing elit. Maxime possimus autem
                            nesciunt laboriosam fugiat est at nam optio quisquam. Tempore
                            soluta sequi dignissimos libero fugiat tenetur id excepturi ut,
                            rem neque ipsam in illum, placeat beatae doloremque, consequuntur
                            dolores fuga optio. Dolores suscipit quas nisi nostrum. Omnis
                            fugit nemo cum.
                        </p>

                        <img
                            src="src/assets/java-svgrepo-com.svg"
                            alt="nasssssssss"
                            className="z-10 w-24 float-right right-0 "
                        />
                    </div>

                    <div className="">
                        <h2 className=" text-3xl font-bold uppercase  float-centre text-orange-500 ">
                            We  Provides {" "}
                        </h2>

                        <img
                            src="src/assets/services-svgrepo-com.svg"
                            alt=""

                            className=" w-24 float-left absolute  z-10 "
                        />

                        

                        <div className="flex flex-wrap float-left justify-center items-center">
                            {services.map((service, index) => {
                                return (
                                    <div key={index} className="flex flex-col w-1/2  p-2 ">
                                        <Link
                                            to={"/"}
                                            className="text-xl font-semibold text-left ml-56 "
                                        >
                                            -&gt; {service}
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                        <img
                            src="src/assets/java-svgrepo-com.svg"
                            alt=""
                            className="z-10 w-24 left-[50%] bottom-0 absolute "
                        />
                    </div>
                </div>
            </div>
           
        </div>
        <Divider sx={{borderBlockColor:"white", marginBottom:"10px"}}/>
        <div>
            <h1 className="text-5xl font-bold uppercase mb-4">Top <span className="text-orange-600">Specific</span></h1>
        <p className=""> <SectionA/></p>
        <Divider sx={{borderBlockColor:"white", margin:"20px 0px"}}/>
        <p className=""> <SectionB/></p>
        <Divider sx={{borderBlockColor:"white", margin:"20px 0px"}}/>
        </div>

        <div>

            
        </div>

      
        </>
    );
}

export default Home;
