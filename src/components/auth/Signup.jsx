import React, { useState } from "react";
import {
  X,
  FileText,
  Shield,
  Users,
  ShoppingCart,
  AlertTriangle,
  Mail,
  Menu,
  Home,
  User,
} from "lucide-react";
import NewNavBar from "./NewNavBar";
import { notification } from "antd";
import axios from "axios";

const TermsAndConditionsModal = ({ isOpen, onClose, onAccept }) => {
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setHasScrolledToBottom(true);
    }
  };

  const handleAccept = () => {
    onAccept();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FileText className="h-6 w-6" />
            <h2 className="text-2xl font-bold">Terms and Conditions</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div
          className="p-6 overflow-y-auto max-h-[60vh]"
          onScroll={handleScroll}
        >
          <div className="prose prose-gray max-w-none">
            {/* Introduction */}
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed">
                By registering for or using{" "}
                <span className="font-semibold text-blue-600">
                  Inshuti y'umubyeyi
                </span>
                , you agree to abide by the following terms and conditions which
                govern your access to the platform. Inshuti y'umubyeyi is a
                digital platform designed to support pregnant women in Rwanda
                through training programs, online support groups, and a product
                marketplace. These terms ensure a safe, respectful, and secure
                experience for all users.
              </p>
            </div>

            {/* Age Requirements */}
            <div className="mb-8 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">
                    Age Requirements & Account Responsibility
                  </h3>
                  <p className="text-amber-700">
                    To use Inshuti y'Umubyeyi, you must be at least 18 years
                    old. During registration, you agree to provide accurate and
                    up-to-date information about yourself and maintain the
                    confidentiality of your account login details. You are
                    solely responsible for all activity that occurs under your
                    account.
                  </p>
                </div>
              </div>
            </div>

            {/* Platform Usage */}
            <div className="mb-8 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
              <div className="flex items-start space-x-3">
                <ShoppingCart className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">
                    Platform Usage
                  </h3>
                  <p className="text-blue-700 mb-3">
                    Inshuti y'Umubyeyi services are intended for personal use
                    only, especially for those seeking to market small-scale,
                    home-based products. The platform may not be used for
                    illegal activities, fraudulent transactions, or to promote
                    harmful or abusive content.
                  </p>
                </div>
              </div>
            </div>

            {/* Community Guidelines */}
            <div className="mb-8 p-4 bg-green-50 border-l-4 border-green-400 rounded-r-lg">
              <div className="flex items-start space-x-3">
                <Users className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-green-800 mb-2">
                    Community Guidelines
                  </h3>
                  <p className="text-green-700">
                    Users are expected to conduct themselves respectfully within
                    support groups and training sessions. Any form of
                    harassment, hate speech, or offensive behavior will result
                    in suspension or removal from the platform. Additionally,
                    the sharing of confidential or personal information from
                    group discussions outside the platform is strictly
                    prohibited.
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy Policy */}
            <div className="mb-8 p-4 bg-purple-50 border-l-4 border-purple-400 rounded-r-lg">
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-purple-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-purple-800 mb-2">
                    Privacy & Data Protection
                  </h3>
                  <p className="text-purple-700">
                    We value your privacy. Inshuti y'Umubyeyi collects only
                    essential information for service delivery, and we take
                    reasonable steps to store it securely. Your data will not be
                    sold or shared with third parties without consent. While we
                    are committed to protecting your information, you also agree
                    to take reasonable steps to protect your account from
                    unauthorized use.
                  </p>
                </div>
              </div>
            </div>

            {/* Marketplace Responsibilities */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-800 mb-3">
                Marketplace Responsibilities
              </h3>
              <p className="text-gray-700 mb-4">
                For users participating in the online marketplace, you are
                responsible for the quality, accuracy, and safety of the
                products you list. Inshuti y'Umubyeyi takes responsibility for
                addressing disputes between buyers and sellers and is committed
                to offering timely support and fair resolution in such cases.
              </p>
            </div>

            {/* Platform Integrity */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-800 mb-3">
                Platform Integrity
              </h3>
              <p className="text-gray-700 mb-4">
                We reserve the right to suspend or terminate any account that
                violates these terms or threatens the platform's integrity.
                Inshuti y'umubyeyi is provided "as is," and we do not guarantee
                uninterrupted service or accept liability for any losses
                resulting from platform downtime or misuse.
              </p>
            </div>

            {/* Updates to Terms */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-800 mb-3">
                Updates to Terms
              </h3>
              <p className="text-gray-700 mb-4">
                From time to time, we may update these terms. You will be
                notified of significant changes, and continued use of the
                platform will indicate your acceptance of the revised terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-600" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Need Help?
                  </h3>
                  <p className="text-gray-700">
                    If you have any questions, please reach out to our support
                    team at{" "}
                    <a
                      href="mailto:helpUmubyeyi@gmail.com"
                      className="text-blue-600 hover:underline"
                    >
                      helpUmubyeyi@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Final Agreement */}
            <div className="p-4 bg-blue-600 text-white rounded-lg">
              <p className="font-medium text-center">
                By proceeding, you confirm that you have read, understood, and
                agree to abide by these terms and conditions.
              </p>
            </div>
          </div>
        </div>

        {/* Footer with Actions */}
        <div className="bg-gray-50 border-t border-gray-200 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <FileText className="h-4 w-4" />
            <span>Please read all terms carefully before proceeding</span>
          </div>

          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleAccept}
              disabled={!hasScrolledToBottom}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                hasScrolledToBottom
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {hasScrolledToBottom ? "Accept Terms" : "Scroll to Accept"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Updated Registration Form Component with Terms Integration
const RegistrationFormWithTerms = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    phone: "",
    password: "",
    email: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!termsAccepted) {
      newErrors.terms = "You must accept the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    try {
      setLoading(true);

      //  API call to register user
      const payload = {
        fullName: formData.fullName,
        username: formData.username,
        phone: formData.phone,
        password: formData.password,
        email: formData.email,
      };
      const response = await axios.post(
        "https://ecommerce-backend-0v7j.onrender.com/api/auth/register",
        payload
      );
      console.log(response);
      if (response.status === 200) {
        setLoading(true);
        notification.success({
          message: "Account created successfully",
          description: "Please login to continue",
        });
      } else {
        setLoading(false);
        notification.error({
          message: "Account creation failed",
          description: "Please try again",
        });
      }
      window.location.replace("/login");
    } catch (error) {
      console.log(error.response.data.message);
      setLoading(false);
      notification.error({
        message: error.response.data.message || "Account creation failed",
        description: "Please try again",
      });
    }
  };

  const handleTermsAccept = () => {
    setTermsAccepted(true);
    setErrors((prev) => ({ ...prev, terms: "" }));
  };

  if (isRegistered) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <NewNavBar />
        <div className="flex-1 flex items-center justify-center px-4 mt-28">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="px-6 py-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2 ">
                  Welcome to Inshuti y'umubyeyi!
                </h2>
                <p className="text-gray-600 mb-6">
                  Your account has been created successfully.
                </p>
                <a href='Login'><button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Continue to Dashboard
                </button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <NewNavBar />
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-2xl">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="px-6 py-8 text-center border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Join Inshuti y'umubyeyi
              </h2>
              <p className="text-gray-600">
                Supporting pregnant women in Rwanda
              </p>
            </div>

            {/* Form */}
            <div className="px-6 py-8">
              <div className="space-y-6">
                {/* Name and Username Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      name="fullName"
                      type="text"
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                    {errors.fullName && (
                      <p className="text-red-600 text-sm">{errors.fullName}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Username
                    </label>
                    <input
                      name="username"
                      type="text"
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Choose a username"
                      value={formData.username}
                      onChange={handleInputChange}
                    />
                    {errors.username && (
                      <p className="text-red-600 text-sm">{errors.username}</p>
                    )}
                  </div>
                </div>

                {/* Phone and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+250782179022"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-sm">{errors.phone}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Password Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        className="w-full px-3 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={handleInputChange}
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-3 text-gray-400"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? "🙈" : "👁️"}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-red-600 text-sm">{errors.password}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        className="w-full px-3 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-3 text-gray-400"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        {showConfirmPassword ? "🙈" : "👁️"}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-red-600 text-sm">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={termsAccepted}
                      onChange={(e) => {
                        setTermsAccepted(e.target.checked);
                        if (e.target.checked) {
                          setErrors((prev) => ({ ...prev, terms: "" }));
                        }
                      }}
                      className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-700">
                      I agree to the{" "}
                      <button
                        type="button"
                        onClick={() => setShowTermsModal(true)}
                        className="text-blue-600 hover:text-blue-800 underline font-medium"
                      >
                        Terms and Conditions
                      </button>
                    </label>
                  </div>
                  {errors.terms && (
                    <p className="text-red-600 text-sm">{errors.terms}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  } text-white`}
                >
                  {loading ? "Creating Account..." : "Create Account"}
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="font-medium text-blue-600 hover:text-blue-800"
                >
                  Sign in here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Terms Modal */}
      <TermsAndConditionsModal
        isOpen={showTermsModal}
        onClose={() => setShowTermsModal(false)}
        onAccept={handleTermsAccept}
      />
    </div>
  );
};

export default RegistrationFormWithTerms;