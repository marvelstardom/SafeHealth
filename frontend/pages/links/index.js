import Image from "next/image"
import dashboard from "../../public/images/dashboard-dark.png"
import dashboardLight from "../../public/images/dashboard-light.png"
import appointment from '../../public/images/appointment-book-dark.png'
import appointmentLight from '../../public/images/appointment-book-light.png'
import patient from '../../public/images/patient-dark.png'
import patientLight from '../../public/images/patient-light.png'
import doctor from '../../public/images/doctor-dark.png'
import doctorLight from '../../public/images/doctor-light.png'
// import department from '../../public/images/diagram.png'
// import pharmacy from '../../public/images/hospital.png'
// import employees from '../../public/images/nurse.png'
// import help from '../../public/images/faq.png'
// import surgery from '../../public/images/syringe.png'
// import settings from '../../public/images/gear.png'
// import notifications from '../../public/images/comment.png'
// import products from '../../public/images/secure-payment.png'
// import logout from '../../public/images/login.png'
// import report from '../../public/images/flag.png'

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
    // {
    //     name: 'department',
    //     image: <Image src={department} height={20} width={20} className="fill-teal-100" alt="icon" />,
    //     // imageLight: <Image src={doctorLight} height={20} width={20} alt="icon" className="absolute" />,
    // },
    // {
    //     name: 'Pharmacy',
    //     image: <Image src={pharmacy} height={20} width={20} alt="icon" />,
    //     // imageLight: <Image src={doctorLight} height={20} width={20} alt="icon" className="absolute" />,
    // },
    // {
    //     name: 'employees',
    //     image: <Image src={employees} height={20} width={20} alt="icon" />,
    //     // imageLight: <Image src={doctorLight} height={20} width={20} alt="icon" className="absolute" />,
    // },
    // {
    //     name: 'Surgery',
    //     image: <Image src={surgery} height={20} width={20} alt="icon" />,
    //     // imageLight: <Image src={doctorLight} height={20} width={20} alt="icon" className="absolute" />,
    // },
    // {
    //     name: 'Products',
    //     image: <Image src={products} height={20} width={20} alt="icon" />,
    //     // imageLight: <Image src={doctorLight} height={20} width={20} alt="icon" className="absolute" />,
    // },
    // {
    //     name: 'Notifications',
    //     image: <Image src={notifications} height={20} width={20} alt="icon" />,
    //     // imageLight: <Image src={doctorLight} height={20} width={20} alt="icon" className="absolute" />,
    // },
    // {
    //     name: 'Help Center',
    //     image: <Image src={help} height={20} width={20} alt="icon" />,
    //     // imageLight: <Image src={doctorLight} height={20} width={20} alt="icon" className="absolute" />,
    // },
    // {
    //     name: 'Report',
    //     image: <Image src={report} height={20} width={20} alt="icon" />,
    //     // imageLight: <Image src={doctorLight} height={20} width={20} alt="icon" className="absolute" />,
    // },
    // {
    //     name: 'Settings',
    //     image: <Image src={settings} height={20} width={20} alt="icon" />,
    //     // imageLight: <Image src={doctorLight} height={20} width={20} alt="icon" className="absolute" />,
    // },
    // {
    //     name: 'Logout',
    //     image: <Image src={logout} height={20} width={20} alt="icon" />,
    //     // imageLight: <Image src={doctorLight} height={20} width={20} alt="icon" className="absolute" />,
    // },
]