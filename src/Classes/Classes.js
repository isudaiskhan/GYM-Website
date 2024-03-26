import React,{useState,useEffect} from 'react'
import image from '../assets/feature (2).png'
import image1 from '../assets/first-icon.png'
import image2 from '../assets/training.jpg'
import image3 from '../assets/training02.jpg';
import image4 from '../assets/training03.jpg';
import image5 from '../assets/training4.jpg';


const Classes = () => {

    const [selectedClass, setSelectedClass] = useState(0); 
  
    const classData = [
      {
        bigImage: image2,
        title: 'First Training Class',
        description: 'Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendreit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.',
        smallImage: image1,
      },
      {
        bigImage: image3,
        title: 'Second Training Class',
        description: 'Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac pulvinar quam tortor a velit. Praesent ultrices erat ante, in ultricies augue ultricies faucibus. Nam tellus nibh, ullamcorper at mattis non, rhoncus sed massa. Cras quis pulvinar eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        smallImage: image1,
      },
      {
        bigImage: image4,
        title: 'Third Training Class',
        description: 'Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id auctor neque posuere sit amet. Aliquam pharetra, augue vel cursus porta, nisi tortor vulputate sapien, id scelerisque felis magna id felis. Proin neque metus, pellentesque pharetra semper vel, accumsan a neque.',
        smallImage: image1,
      },
      {
        bigImage: image5,
        title: 'Fourth Training Class',
        description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ultrices elementum odio ac tempus. Etiam eleifend orci lectus, eget venenatis ipsum commodo et.',
        smallImage: image1,
      },
    ];


    useEffect(() => {
        const intervalId = setInterval(() => {
          setSelectedClass((prevSelectedClass) =>
            (prevSelectedClass + 1) % classData.length
          );
        }, 5000);
    
        return () => clearInterval(intervalId);
      }, [classData.length]);
    
      const handleClassClick = (index) => {
        setSelectedClass(index);
      };

  return (
    <>

<div className='w-full py-20 mt-14 px-4' id='classes'>
    <h1 className='text-center text-3xl font-bold text-[#232d39]'>OUR <span className='text-[#ed563b]'>CLASSES</span></h1>
     <img src={image} className='mx-auto mt-6'/>

    <div className='sm:w-2/5 mx-auto text-center mt-7'>
      <p className='text-[#7a7a7a]'>Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu.</p>
     </div>
     </div>



     <div className='w-full px-4'>
        <div className='max-w-[1150px] mx-auto flex flex-col justify-between md:flex-row-reverse'>
          <div className='md:w-1/3 flex flex-col md:order-2'>
            {classData.map((data, index) => (
              <div
                key={index}
                className={`flex md:px-12 py-6 mt-10 shadow-xl border ${
                  selectedClass === index ? 'bg-gray-200' : ''
                }`}
                onClick={() => handleClassClick(index)}
                style={{ cursor: 'pointer' }}
              >
                <img src={data.smallImage} alt={data.title} />
                <p className={`px-5 text-xl font-semibold ${
            index === 0 ? 'text-[#ed563b]' : 'text-[#232d39]'}`}>{data.title}</p>
              </div>
              
            ))}
            
      <div className='mt-10'>
            <button className="bg-[#ed563b] hover:bg-[#f83b19] text-white py-5 w-full">
             VIEW ALL SCHEDULE
            </button>
            </div>
          </div>



          <div className='md:w-3/5 mt-10 flex flex-col md:order-1'>
            <img src={classData[selectedClass].bigImage} alt='Training Class' />
            <h1 className='text-2xl mt-8 font-serif font-semibold text-[#232d39]'>
              {classData[selectedClass].title}
            </h1>
            <p className='mt-5 text-[#7a7a7a]'>{classData[selectedClass].description}</p>

            <div className='mt-8'>
            <button className="bg-[#ed563b] hover:bg-[#f83b19] text-white py-3 px-4">
             VIEW SCHEDULE
            </button>
            </div>
          </div>    
        </div>
      </div>

      
    </>
  )
}

export default Classes