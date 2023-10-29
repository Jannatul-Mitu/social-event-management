import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; 

const Services = ({ data }) => {
    return (
        <div className="">
            <div className="card bg-base-100 shadow-xl image-full h-80">
                <figure><img src={data.image} alt="#" /></figure>
                <div className="card-body">
                    <h2 className="text-center font-bold text-2xl mb-5">{data.title}</h2>
                    <p className="text-center">{data.description}</p>
           
                    <div className="card-actions justify-end">
                        <p className="text-3xl font-bold mt-6">${data.price}</p>
                        <Link to={`/services/${data.id}`}
                            type="button"
                            className="mt-8 inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            data-te-ripple-init
                            data-te-ripple-color="light">Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;

Services.propTypes = {
    data: PropTypes.object
}