import landingImage from '../assets/landing.png'
import appDownImage from '../assets/appDownload.png'
const HomePage = () => {
  return (
    <div className='flex flex-col gap-12'>
        <div className=".shadow-md .bg-white .py-8 .rounded-lg flex flex-col gap-5 text-center -mt-16">
            <h1 className='text-5xl text-orange-500 tracking-tight font-bold'>
                Tuck into  a takeaway today
            </h1>
            <span className="text-slate-950 text-xl">Food is just a click away!</span>
        </div>


        <div className="grid md:grid-cols-2 gap-5">
          <img src={landingImage} />
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <span className='font-bold text-3xl tracking-tight md:text-1xl'>Order takeaway even faster</span>
            <span>Download the MernEats app for faster ordering and personalised recommendations</span>
            <img src={appDownImage}/>
          </div>
        </div>


    </div>
  )
}

export default HomePage