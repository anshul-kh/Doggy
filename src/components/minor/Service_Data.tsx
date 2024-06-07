import React from 'react'

// type for service in map method
type serviceType = {
    title: string;
    info: string;
}

const data =[
    {
        "title":"Pet Sitting",
        "info":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptatibus aliquid laborum quis ad labore omnis iusto? Saepe molestiae, labore consectetur dignissimos minus sit quae nam commodi nemo velit autem."
    },
   {
        "title":"Dog Walking",
        "info":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptatibus aliquid laborum quis ad labore omnis iusto? Saepe molestiae, labore consectetur dignissimos minus sit quae nam commodi nemo velit autem."
    },
    {
        "title":"Pet Boarding",
        "info":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptatibus aliquid laborum quis ad labore omnis iusto? Saepe molestiae, labore consectetur dignissimos minus sit quae nam commodi nemo velit autem."
    },
    {
        "title":"Pet Grooming",
        "info":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptatibus aliquid laborum quis ad labore omnis iusto? Saepe molestiae, labore consectetur dignissimos minus sit quae nam commodi nemo velit autem."
    },
    {
        "title":"Pet Training",
        "info":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptatibus aliquid laborum quis ad labore omnis iusto? Saepe molestiae, labore consectetur dignissimos minus sit quae nam commodi nemo velit autem."
    },
    {
        "title":"Pet Transportation",
        "info":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptatibus aliquid laborum quis ad labore omnis iusto? Saepe molestiae, labore consectetur dignissimos minus sit quae nam commodi nemo velit autem."
    }
]

const Service_Data = () => {
  return (
    <div className='flex justify-center items-center flex-col w-full overflow-x-hidden'>
        <h1 className=' flex  justify-center items-center text-3xl font-bold text-café_noir  border-b '>
            What Do We Offer?
        </h1>

        <div className='flex md:flex-row  flex-col justify-center text-café_noir items-center flex-wrap w-full '>
            {/* Map Method for Services */}
            {
                data.map((service:serviceType)=>(
                    <div className='flex flex-col items-center justify-center  md:w-2/6 p-10 gap-5'>
                        <h1 className='font-bold text-2xl border-b '>{service.title}</h1>
                        <p className='w-full'>{service.info}</p>
                    </div>
                ))
            }
        </div>

        </div>
  )
}

export default Service_Data