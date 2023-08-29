import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import Accordion from "react-bootstrap/Accordion";
import appData from "@data/app.json";
import { Formik } from "formik";

const Contact = () => {
  const faqData = {
    title: "Client’s FAQ",
    subtitle: "",
    items: [
      {
        title: "Is Taiyang a product company or a service company?",
        text: "Taiyang is a versatile company that offers both products and services. While our core expertise lies in e-commerce sales, import, and export activities, focusing on premium-grade tech products, computer parts, components, and peripherals, we also engage in wholesale trading of various goods, including clothing, textiles, fashion products, and accessories. Additionally, we provide a range of services such as IT consulting, cybersecurity solutions, digital branding, design, and marketing services. Our commitment is to cater to the evolving needs of our clients, whether they require top-notch products or innovative solutions to enhance their businesses.",
      },
      {
        title: "What industries does Taiyang Global serve?",
        text: "Taiyang Global serves various industries, focusing on the import and export of consumer electronics, computer parts, components, peripherals, and wholesale trading of clothing, textiles, and related goods.",
      },
      {
        title:
          "Does Taiyang Global provide consulting services for businesses?",
        text: "Yes, we offer comprehensive business and management consulting services to support businesses in their growth and development. Our experienced consultants can help identify areas for improvement, implement growth strategies, and optimize operations for peak efficiency.",
      },
      {
        title:
          "What industries does Taiyang Global specialize in for product sourcing?",
        text: "Taiyang Global specializes in product sourcing across various industries, including consumer electronics, computer parts, components, peripherals, fashion, textiles, and related goods.",
      },
      {
        title:
          "Can Taiyang Global assist with product sourcing for specific items not listed on your website?",
        text: "Absolutely! Our expert sourcing team can help you find and procure specific products that may not be available on our website. Contact us with your requirements, and we will do our best to fulfill your sourcing needs.",
      },
      {
        title: "Does Taiyang Global offer international shipping?",
        text: "Yes, we provide international shipping for our products to customers worldwide. Shipping costs and delivery times may vary based on the destination.",
      },
      {
        title: "How can I purchase products from Taiyang Global?",
        text: "To purchase our products, please reach out to our sales team through our website or contact us via email. Our dedicated team will assist you with product inquiries, pricing, and the ordering process to ensure a seamless  experience.",
      },
    ],
  };

  return (
    <Layouts>
      <PageBanner pageTitle={"Contact Us"} pageDesc={""} />

      {/* Onovo Contact Info */}
      <section className="onovo-section gap-top-140">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
              {/* Heading */}
              <div className="onovo-text gap-bottom-40">
                <h4>Send Us A Message</h4>
                We will reach out to you shortly.
              </div>

              {/* Form */}
              <div className="onovo-form">
                <Formik
                  initialValues={{ email: "", name: "", tel: "", message: "" }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                      errors.email = "Required";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid email address";
                    }
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    const form = document.getElementById("contactForm");
                    const status = document.getElementById("contactFormStatus");
                    const data = new FormData();

                    data.append("name", values.name);
                    data.append("tel", values.tel);
                    data.append("email", values.email);
                    data.append("message", values.message);

                    fetch(form.action, {
                      method: "POST",
                      body: data,
                      headers: {
                        Accept: "application/json",
                      },
                    })
                      .then((response) => {
                        if (response.ok) {
                          status.innerHTML = "Thanks for your submission!";
                          form.reset();
                        } else {
                          response.json().then((data) => {
                            if (Object.hasOwn(data, "errors")) {
                              status.innerHTML = data["errors"]
                                .map((error) => error["message"])
                                .join(", ");
                            } else {
                              status.innerHTML =
                                "Oops! There was a problem submitting your form";
                            }
                          });
                        }
                      })
                      .catch((error) => {
                        status.innerHTML =
                          "Oops! There was a problem submitting your form";
                      });

                    setSubmitting(false);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                  }) => (
                    <form
                      onSubmit={handleSubmit}
                      id="contactForm"
                      action={appData.settings.formspreeURL}
                      className="cform"
                      method="post"
                    >
                      <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <p>
                            <input
                              placeholder="Full Name"
                              type="text"
                              name="name"
                              required="required"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.name}
                            />
                          </p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <p>
                            <input
                              placeholder="Email Address"
                              type="email"
                              name="email"
                              required="required"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                            />
                          </p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <p>
                            <input
                              placeholder="Phone Number"
                              type="tel"
                              name="tel"
                              required="required"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.tel}
                            />
                          </p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <p>
                            <textarea
                              placeholder="Message"
                              name="message"
                              required="required"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.message}
                            />
                          </p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <p>
                            <button
                              type="submit"
                              className="onovo-btn onovo-hover-btn"
                            >
                              <span>Send Message</span>
                            </button>
                          </p>
                        </div>
                      </div>

                      <div
                        className="form-status alert-success"
                        id="contactFormStatus"
                      />
                    </form>
                  )}
                </Formik>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">
              {/* Contact Info */}
              <div className="onovo-contact-info onovo-text-white">
                <ul>
                  <li>
                    <h5>Contact Info</h5>
                    <a
                      href="tel:+65 6929 8272"
                      className="onovo-lnk lnk--white"
                      target="_blank"
                    >
                      +65 6929 8272
                    </a>
                    <br />
                    <a
                      href="mailto:info@taiyangsg.com"
                      className="onovo-lnk lnk--white"
                      target="_blank"
                    >
                      info@taiyangsg.com
                    </a>

                    <div
                      className="onovo-social-1 onovo-social-active"
                      style={{ marginTop: "10px" }}
                    >
                      <ul>
                        {appData.social.map((item, key) => (
                          <li key={`contact-social-item-${key}`}>
                            <a
                              href={item.link}
                              target="_blank"
                              className="onovo-social-link onovo-hover-2"
                              title={item.title}
                            >
                              <i className={`icon ${item.icon}`} />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                  <li>
                    <h5>160 Robinson Road</h5>
                    <div>
                      #14-04 Singapore Business Federation Center, <br />
                      Singapore (068914).
                    </div>
                  </li>
                  <li>
                    <h5>Singapore</h5>
                    <div>Singapore Business Federation Center</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onovo Faq */}
      <section className="onovo-section gap-top-140">
        <div className="container">
          {/* Heading */}
          <div className="onovo-heading align-center gap-bottom-40">
            <div className="onovo-subtitle-1">
              <span>{faqData.title}</span>
            </div>
            <h2 className="onovo-title-2">
              <span dangerouslySetInnerHTML={{ __html: faqData.subtitle }} />
            </h2>
          </div>

          {/* Faq items */}
          <div className="onovo-faq-items">
            <Accordion defaultActiveKey="faq-acc-0">
              {faqData.items.map((item, key) => (
                <Accordion.Item
                  key={`faq-item-${key}`}
                  eventKey={`faq-acc-${key}`}
                >
                  <div
                    key={`faq-item-${key}`}
                    className="onovo-faq-item onovo-collapse-item"
                  >
                    <Accordion.Header>
                      <h5 className="title onovo-collapse-btn">
                        <span>{item.title}</span>
                        <i className="arrow" />
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="onovo-text">
                        <div dangerouslySetInnerHTML={{ __html: item.text }} />
                      </div>
                    </Accordion.Body>
                  </div>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Contact;
