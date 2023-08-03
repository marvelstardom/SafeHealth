import Image from "next/image"
import dashboard from "../../public/images/dashboard-dark.png"
import dashboardLight from "../../public/images/dashboard-light.png"
import appointment from '../../public/images/appointment-book-dark.png'
import appointmentLight from '../../public/images/appointment-book-light.png'
import patient from '../../public/images/patient-dark.png'
import patientLight from '../../public/images/patient-light.png'
import doctor from '../../public/images/doctor-dark.png'
import doctorLight from '../../public/images/doctor-light.png'

export const links = [
    {
        name: 'overview',
        image: <Image src={dashboard} height={20} width={20} alt="icon" />,
        imageLight: <Image src={dashboardLight} height={20} width={20} alt="icon" className="absolute" />,
    },
    {
        name: 'appointment',
        image: <Image src={appointment} height={20} width={20} alt="icon" />,
        imageLight: <Image src={appointmentLight} height={20} width={20} alt="icon" className="absolute" />,
    },
    {
        name: 'patients',
        image: <Image src={patient} height={20} width={20} alt="icon" />,
        imageLight: <Image src={patientLight} height={20} width={20} alt="icon" className="absolute" />,
    },
    {
        name: 'doctors',
        image: <Image src={doctor} height={20} width={20} alt="icon" />,
        imageLight: <Image src={doctorLight} height={20} width={20} alt="icon" className="absolute" />,
    },
]