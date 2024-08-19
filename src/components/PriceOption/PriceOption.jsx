import Feature from "../Feature/Feature";


const PriceOption = ({option}) => {

    const{ name,id,price,features} = option;

    return (
        <div className="bg-sky-200 p-10 rounded-2xl text-center">
            <h2 className="text-2xl">
                <span>{price}$ </span>
                <span>/month</span>
            </h2>
            <h4 className="text-3xl">{name}</h4>
            {
                features.map((feature,index)=><Feature feature={feature} key={index}></Feature>)
            }
            
        </div>
    );
};

export default PriceOption;