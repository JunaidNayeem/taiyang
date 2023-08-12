import Layouts from "@layouts/Layouts";
import Accordion from 'react-bootstrap/Accordion';

import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";
import PartnersSection from "@components/sections/Partners";

const FAQ = () => {
  const Content = {
    "items": [
      {
        "heading": "What industries does Taiyang Global serve, and how can I purchase products from your company?",
        "content": "Taiyang Global serves various industries, focusing on the import and export of consumer electronics, computer parts, components, peripherals, and wholesale trading of clothing, textiles, and related goods. To purchase our products or inquire about wholesale opportunities, contact our sales team via our website or email for a seamless experience."
      },
      {
        "heading": "Does Taiyang Global provide consulting services for businesses??",
        "content": "Yes, we offer comprehensive business and management consulting services to support businesses in their growth and development. Our experienced consultants can help identify areas for improvement, implement growth strategies, and optimize operations for peak efficiency."
      },
      {
        "heading": "What industries does Taiyang Global specialize in for product sourcing?",
        "content": "Taiyang Global specializes in product sourcing across various industries, including consumer electronics, computer parts, components, peripherals, fashion, textiles, and related goods."
      },
      {
        "heading": "Can Taiyang Global assist with product sourcing for specific items not listed on your website?",
        "content": "Absolutely! Our expert sourcing team can help you find and procure specific products that may not be available on our website. Contact us with your requirements, and we will do our best to fulfill your sourcing needs."
      },
      {
        "heading": "Does Taiyang Global offer international shipping?",
        "content": "Yes, we provide international shipping for our products to customers worldwide. Shipping costs and delivery times may vary based on the destination."
      },
      {
        "heading": "How can I purchase products from Taiyang Global?",
        "content": "To purchase our products, please reach out to our sales team through our website or contact us via email. Our dedicated team will assist you with product inquiries, pricing, and the ordering process to ensure a seamless  experience."
      }
    ]
  }

  return (
    <Layouts>
      <PageBanner pageTitle={"Client’s FAQ"} pageDesc={"Solving business problems is an everyday."} />
      
      {/* Onovo Faq */}
			<section className="onovo-section gap-top-140 gap-bottom-140">
				<div className="container">

          {/* Faq items */}
          <Accordion>
          <div className="onovo-faq-items">
            {Content.items.map((item, key) => (
            <Accordion.Item key={`faq-item-${key}`} eventKey={`faq-acc-${key}`}>
            <div className="onovo-faq-item onovo-collapse-item">
              <Accordion.Header>
              <h5 className="title onovo-collapse-btn">
                <span>{item.heading}</span>
                <i className="arrow" />
              </h5>
              </Accordion.Header>
              <Accordion.Body>
                <div className="onovo-text">
                  <div dangerouslySetInnerHTML={{__html : item.content}} />
                </div>
              </Accordion.Body>
            </div>
            </Accordion.Item>
            ))}
          </div>
          </Accordion>

        </div>
			</section>

      <CallToActionSection />

      <PartnersSection paddingTop />

    </Layouts>
  );
};
export default FAQ;