import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ServicesDtls = () => {
    const datas = useLoaderData();
    const { id } = useParams();

    const data = datas.find(data => data.id == id);


    useEffect(() => {
        document.title = `${data.title}`
    }, []);

    return (
        <div className="w-11/12 mx-auto mt-10 mb-40">
            <div className="grid grid-cols-1 ">
                <div className=" col-span-2 w-full">
                    <img className="w-full" src={data.image} alt="" />
                </div>
                <div className="">
                    <h1 className="text-4xl font-bold mt-10 mb-5">{data?.title}</h1>
                    <h1 className="font-medium">{data.sub_title}</h1>
                    <p className="mt-4">{data.description}</p>
                </div>
            </div>
            
        </div>
    );
};

export default ServicesDtls;