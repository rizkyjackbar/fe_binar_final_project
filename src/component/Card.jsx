
  
const Card = ({
    img,
    classCategory,
    classesName,
    classMentor,
}) => {
    
return (
    <>
    <div className="shadow-lg rounded-xl">
        <a className="bg-white cardCourse w-[20.1875rem] " href="#">
            <img src={img} className="rounded-t-2xl w-full h-20 object-none" />
            <div className="cardBody px-2.5 py-2 flex flex-col gap-0.5 " >
                <p className="text-[0.625rem] font-bold text-[#6148FF]">
                {classCategory}
                </p>
                <p className="text-[0.625rem] font-bold">{classesName}</p>
                <p className="text-[0.5rem] font-normal">by {classMentor}</p>
                
            </div>
        </a>
    </div>

    </>
        
    );
};

export default Card;
  