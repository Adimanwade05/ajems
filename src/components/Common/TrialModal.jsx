import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, User, Building2 } from "lucide-react";
import popupImg from "../../assets/images/ajems_popup.png";
import "./TrialModal.css";

export default function TrialModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! Your 14-day free trial is being set up.");
    onClose();
  };

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="tmodal__overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="tmodal"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="tmodal__close"
              onClick={onClose}
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {/* left — image as background */}
            <div
              className="tmodal__aside"
              style={{ backgroundImage: `url(${popupImg})` }}
            />

            {/* right — form */}
            <div className="tmodal__body">
              <h4 className="tmodal__title">Create your account</h4>
              <p className="tmodal__desc">Get started in less than a minute.</p>

              <form className="tmodal__form" onSubmit={handleSubmit}>
                <div className="tmodal__field">
                  <User size={16} className="tmodal__ico" />
                  <input type="text" placeholder="Full name" required />
                </div>
                <div className="tmodal__field">
                  <Mail size={16} className="tmodal__ico" />
                  <input type="email" placeholder="Work email" required />
                </div>
                <div className="tmodal__field">
                  <Building2 size={16} className="tmodal__ico" />
                  <input type="text" placeholder="Company name" />
                </div>
                <div className="tmodal__field">
                  <input
                    type="password"
                    placeholder="Create password"
                    required
                  />
                </div>

                <button type="submit" className="tmodal__submit">
                  Sign Up
                </button>
              </form>

              <p className="tmodal__note">
                By signing up you agree to our Terms &amp; Privacy Policy.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}