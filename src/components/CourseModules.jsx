const CourseModules = ({ moduleNumber, title, about }) => {
    return (

        
            <div className="max-w-[357px] pc-custom:max-w-[31.3%] desktop-custom:max-w-[31.3%] bg-white p-6 mb-8 tablet-custom:max-w-[48%] mobile-hidden:max-w-full mobile-hidden:w-full mobile-hidden:p-4 mobile-hidden:m-4">
                <p className="text-[#aa006d] font-medium mb-4 text-base mobile-hidden:text-sm">
                    {moduleNumber}
                </p>
                <h4 className="text-lg font-black mb-2 text-black mobile-hidden:text-base">
                    {title}
                </h4>
                <p class="m-0 text-base">
                    {about}
                </p>
            </div>
        

    );
}
 
export default CourseModules;



