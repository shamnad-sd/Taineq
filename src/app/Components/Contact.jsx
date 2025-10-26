
import CommonHeader from './UI/CommonHeader'
import ContactInfo from './UI/ContactInfo'
import Form from './UI/Form'
import Map from './UI/Map'
import Record from './UI/Record'

const Contact = ({ contactData }) => {





    return (
        <>

            <section className='bg-gradient-to-b from-[#d0e7cb] via-transparent to-transparent px-6 lg:px-22 md:px-10'>
                <CommonHeader
                    Heading={contactData?.title?.rendered}
                    subHeading={contactData?.acf?.contact_heading}
                    Breadcrumb={contactData?.title?.rendered}
                    BreadcrumbLink={contactData?.slug}
                />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 py-10 lg:pb-20">
                    {/* Left side - Form */}
                    
                    <Form
                        contactData={contactData}
                    />

                    {/* Right side - Contact Information */}
                    <ContactInfo
                        contactData={contactData}
                    />
                </div>
            </section>

            <Map contactData={contactData} />
            
            <div className='block md:hidden'>
                <Record />
            </div>
        </>

    )
}

export default Contact