import Header from '../Header'
import Footer from '../Footer'
import './index.css'

const PrivacyPolicy = () => (
  <>
    <Header />
    <div className="privacy-container">
      <h1 className="privacy-heading text-center main-heading">YOUR DATA IS SAFE WITH US</h1>
      <h1 className="privacy-heading">Contact forms</h1>
      <p className="privacy-description">The contact details we collect from you are only for customer recognition and for service delivery. we do not share your contact details anywhere.</p>
      <h1 className="privacy-heading">Cookies</h1>
      <p className="privacy-description">If you leave a comment on our site you may opt-in to saving your name, email address, and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</p>
      <h1 className="privacy-heading">Analytics</h1>
      <p className="privacy-description">We use the analytics for better service improvement only.</p>
      <h1 className="privacy-heading">Embedded content from other websites</h1>
      <p className="privacy-description">Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</p>
      <h1 className="privacy-heading">How long do we retain your data?</h1>
      <p className="privacy-description">If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.</p>
      <h1 className="privacy-heading">What rights do you have over your data?</h1>
      <p className="privacy-description">If you have provided any details on this site or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.</p>
    </div>
    <Footer />
  </>
)

export default PrivacyPolicy