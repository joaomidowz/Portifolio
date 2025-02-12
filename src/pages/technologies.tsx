import '../App.css'

function Tech() {

    return (

        <div className="w-screen h-screen md:w-auto bg-secondary font-poppins text-primary p-5  max-phone:h-100 max-phone:rounded-t-3xl max-phone:mb-8px max-phone:shadow-phone">


            <h1 className='font-black text-2xl p-14 max-mobile:text-xl max-phone:text-lg max-phone:p-6 max-phone:mb-8' >Técnologias</h1>

            <div className='flex justify-center '>
                <img src="Elipse.svg" alt="elipse" className='max-w-[450px] max-h-[450px]  max-mobile:max-w-[300px] max-mobile:max-h-[300px] max-phone:max-h-[250px] max-phone:max-h-[250px]' />
            </div>
        </div>

    )
}

export default Tech