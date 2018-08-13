const babel = require("babel-core");
const plugin = require("../");
const assert = require("assert");

const example = `
"use strict";
try {
  angular.module("mpContainerTranslations");
} catch (e) {
  angular.module("mpContainerTranslations", ["pascalprecht.translate"]);
}
angular
  .module("mpContainerTranslations")
  .config([
    "$translateProvider",
    function(a) {
      var b = {
        manage_premium: {
          modals: {
            domain_connection_error_purchased_elsewhere_support_link:
              "https://www.wix.com/support/html5/article/wix-domain-troubleshooter",
            restart_connection_wizard: "Restart Connection Wizard",
            continue: "Continue"
          }
        }
      };
      a.translations("en", b),
        a.translations(b),
        a.preferredLanguage && a.preferredLanguage("en");
    }
  ])
  .value("preferredLanguage", "en");
`;

const example2 = `"use strict";
try {
  angular.module("mpContainerTranslations");
} catch (e) {
  angular.module("mpContainerTranslations", ["pascalprecht.translate"]);
}
angular
  .module("mpContainerTranslations")
  .config([
    "$translateProvider",
    function(a) {
      var b = {
        manage_premium: {
          modals: {
            domain_connection_error_purchased_elsewhere_support_link:
              "https://www.wix.com/support/html5/article/wix-domain-troubleshooter",
            restart_connection_wizard: "Restart Connection Wizard",
            continue: "Continue",
            cancel: "Cancel",
            close: "Close",
            check_domain_connection: {
              to_make_sure_restart_wizard:
                "To make sure that your domain is configured correctly at your domain provider, restart the Domain Connection Wizard.",
              does_not_point_to_wix_error:
                "Your domain connection has to be confirmed before you can buy a Mailbox @ {{domainName}}.",
              general_error:
                "Your domain is not connected properly, please {{startLink}}click here{{endLink}} to check your domain settings.",
              title: "Check Your Domain Connection"
            },
            domain_connection_confirmed: {
              congratulations:
                "Congratulations! Your domain connection has been confirmed, so you're good to go. Click Continue to get a Mailbox.",
              title: "Your Domain Connection is Confirmed"
            }
          },
          container: {
            header_billing_and_payments: "Billing & Payments",
            header_mailboxes: "Mailboxes",
            header_domains: "Domains",
            header_premium_plan: "Premium Plan",
            page_title: "Premium Subscriptions | Wix.com"
          },
          container_premium: "Premium"
        }
      };
      a.translations("en", b),
        a.translations(b),
        a.preferredLanguage && a.preferredLanguage("en");
    }
  ])
  .value("preferredLanguage", "en");`;

const example3 = `"use strict";
try {
  angular.module("mpContainerTranslations");
} catch (e) {
  angular.module("mpContainerTranslations", ["pascalprecht.translate"]);
}
angular
  .module("mpContainerTranslations")
  .config([
    "$translateProvider",
    function(a) {
      var b = {
        manage_premium: {
          modals: {
            domain_connection_error_purchased_elsewhere_support_link:
              "https://www.wix.com/support/html5/article/wix-domain-troubleshooter",
            restart_connection_wizard: "Restart Connection Wizard",
            continue: "Continue",
            cancel: "Cancel",
            close: "Close",
            check_domain_connection: {
              to_make_sure_restart_wizard:
                "To make sure that your domain is configured correctly at your domain provider, restart the Domain Connection Wizard.",
              does_not_point_to_wix_error:
                "Your domain connection has to be confirmed before you can buy a Mailbox @ {{domainName}}.",
              general_error:
                "Your domain is not connected properly, please {{startLink}}click here{{endLink}} to check your domain settings.",
              title: "Check Your Domain Connection"
            },
            domain_connection_confirmed: {
              congratulations:
                "Congratulations! Your domain connection has been confirmed, so you're good to go. Click Continue to get a Mailbox.",
              title: "Your Domain Connection is Confirmed"
            }
          },
          container: {
            header_billing_and_payments: "Billing & Payments",
            header_mailboxes: "Mailboxes",
            header_domains: "Domains",
            header_premium_plan: "Premium Plan",
            page_title: "Premium Subscriptions | Wix.com"
          },
          container_premium: "Premium"
        }
      };
      a.translations("en", b),
        a.translations(b),
        a.preferredLanguage && a.preferredLanguage("en");
    }
  ])
  .value("preferredLanguage", "en");
try {
  angular.module("premuimUiLibTranslations");
} catch (e) {
  angular.module("premuimUiLibTranslations", ["pascalprecht.translate"]);
}
angular
  .module("premuimUiLibTranslations")
  .config([
    "$translateProvider",
    function(a) {
      var b = {
        validator: {
          messages: {
            general_error: "General Error",
            premium_validation_drop_down_required:
              "Please select a value from the drop-down",
            premium_validation_postal_code: "Postal code is invalid",
            premium_validation_email: "Please enter a valid e-mail address",
            premium_validation_is_required: "{{fieldName}} is required",
            premium_validation_required: "{{fieldName}} is required",
            premium_validation_max_length:
              "{{fieldName}} cannot have more than {{maxLimit}} characters",
            premium_validation_min_length:
              "{{fieldName}} needs to be at least {{minLimit}} characters"
          }
        },
        dialog_default: {
          error_dialog_title: "Uh oh!",
          button_cancel: "Cancel",
          button_ok: "OK"
        },
        views: {
          general_error: {
            click_reload_to_try_again:
              "Please {{startLink}}reload{{endLink}} and try again.",
            something_weird_just_happen: "Something weird just happened"
          },
          restricted_error: {
            go_to_site_dashboard: "Go to site dashboard",
            learn_more: "Learn More",
            learn_more_url:
              "https://www.wix.com/support/html5/article/information-for-site-contributors",
            sorry_only_site_owner_can_access_this_page:
              "Sorry, but only site owners can access this page."
          }
        },
        modals: {
          general_error: {
            ok: "OK",
            general_error_title: "Error",
            something_went_wrong: "Something went wrong. Please try again later"
          }
        },
        billing_and_payments_PaymentMethodSubType_MP_OXXO: "OXXO",
        billing_and_payments_PaymentMethodSubType_MP_BANAMEX: "Banamex",
        billing_and_payments_PaymentMethodSubType_MP_BANCOMER: "Bancomer",
        billing_and_payments_PaymentMethodSubType_MP_SERFIN: "Banamex",
        billing_and_payments_PaymentMethodSubType_AP_BOLETO: "Boleto Bancario",
        billing_and_payments_PaymentMethodSubType_PAYU_CREDIT_CARD:
          "PayU Credit",
        billing_and_payments_PaymentMethodSubType_PAYU_DEBIT_CARD:
          "PayU Debit Card",
        billing_and_payments_PaymentMethodSubType_PAYU_NET_BANKING:
          "Netbanking",
        billing_and_payments_BillingAccountType_CREDIT_CARD: "Credit Card",
        billing_and_payments_BillingAccountType_E_CHECK: "E Check",
        billing_and_payments_BillingAccountType_BANK_DRAFT_ACCOUNT:
          "Bank Draft Account",
        billing_and_payments_BillingAccountType_MANUAL_PAYMENT_ACCOUNT:
          "Manual Payment Account",
        billing_and_payments_BillingAccountType_PAY_PAL: "PayPal",
        billing_and_payments_BillingAccountType_WIRE_TRANSFER_ACCOUNT:
          "Wire Transfer Account",
        billing_and_payments_BillingAccountType_WALLET_YANDEX: "Yandex",
        billing_and_payments_BillingAccountType_MERCADO_PAGO_RECURRING:
          "Mercado Pago Recurring",
        billing_and_payments_BillingAccountType_CREDITS_PREPAID_CARD:
          "Credit Prepaid Card",
        billing_and_payments_BillingAccountType_REG_DOT_RU: "Reg.ru",
        billing_and_payments_BillingAccountType_SEPA_DIRECT_DEBIT:
          "SEPA Direct Debit",
        billing_and_payments_BillingAccountType_VIRTUAL_MONEY: "Virtual Money",
        billing_and_payments_BillingAccountType_ACCOUNT_CREDIT:
          "Account Credit",
        billing_and_payments_BillingAccountType_CASH: "Cash",
        billing_and_payments_BillingAccountType_BANK_TRANSFER: "Bank Transfer",
        billing_and_payments_Cash: "Cash",
        billing_and_payments_CreditCardType_Visa: "Visa",
        billing_and_payments_CreditCardType_MasterCard: "Mastercard",
        billing_and_payments_CreditCardType_AMEX: "AMEX",
        billing_and_payments_CreditCardType_Discover: "Discover",
        billing_and_payments_CreditCardType_JCB: "JCB",
        billing_and_payments_CreditCardType_ENROUTE: "enRoute",
        billing_and_payments_CreditCardType_Diners: "Diners Club",
        billing_and_payments_CreditCardType_SOLO: "Solo",
        billing_and_payments_CreditCardType_MASTERO: "Maestro",
        billing_and_payments_CreditCardType_SBI_MAESTRO: "Maestro",
        billing_and_payments_CreditCardType_VISA_DELTA: "Visa DELTA",
        billing_and_payments_CreditCardType_BANCARD: "Bancard",
        billing_and_payments_CreditCardType_ELECTRON: "Visa Electron",
        billing_and_payments_CreditCardType_MAESTR_UK: "Maestro UK",
        billing_and_payments_CreditCardType_CARTE_BLUE: "CARTE BLEUE",
        billing_and_payments_CreditCardType_ELO: "ELO",
        billing_and_payments_bank_transfer: "Bank Transfer",
        billing_and_payments_CreditCardType_undefined: "",
        billing_and_payments_CreditCardType_Aura: "Aura",
        billing_and_payments_CreditCardType_CARTE_BANCAIRE: "Carte Bancaire",
        billing_and_payments_CreditCardType_Dankort: "Dankort",
        billing_and_payments_CreditCardType_Postepay: "Postepay",
        billing_and_payments_CreditCardType_UnionPay: "UnionPay",
        premium: {
          enums: {
            paymentCycle_ONE_TIME_Capitalized: "1 Time",
            paymentCycle_YEARS_Capitalized: "{{number}} Years",
            paymentCycle_YEAR_Capitalized: "Year",
            paymentCycle_YEARLY_Capitalized: "Yearly",
            paymentCycle_SEMI_ANNUALLY_Capitalized: "6 Months",
            paymentCycle_QUARTER_Capitalized: "3 Months",
            paymentCycle_QUARTERLY_Capitalized: "Quarterly",
            paymentCycle_MONTH_Capitalized: "Month",
            paymentCycle_MONTHLY_Capitalized: "Monthly",
            paymentCycle_ONE_TIME: "1 time",
            paymentCycle_YEARS: "{{number}} years",
            paymentCycle_YEAR: "year",
            paymentCycle_YEARLY: "yearly",
            paymentCycle_SEMI_ANNUALLY: "6 months",
            paymentCycle_QUARTER: "3 months",
            paymentCycle_QUARTERLY: "quarterly",
            paymentCycle_MONTH: "month",
            paymentCycle_MONTHLY: "monthly",
            premiumServiceType_IMAGES_plural_capitalized: "Images",
            premiumServiceType_IMAGES_plural: "images",
            premiumServiceType_IMAGES_capitalized: "Image",
            premiumServiceType_IMAGES: "image",
            premiumServiceType_TPA_plural_capitalized: "Apps",
            premiumServiceType_TPA_plural: "apps",
            premiumServiceType_TPA_capitalized: "App",
            premiumServiceType_TPA: "app",
            premiumServiceType_MAILBOX_plural_capitalized: "Mailboxes",
            premiumServiceType_MAILBOX_plural: "Mailboxes",
            premiumServiceType_MAILBOX_capitalized: "Mailbox",
            premiumServiceType_MAILBOX: "Mailbox",
            premiumServiceType_DOMAIN_plural_capitalized: "Domains",
            premiumServiceType_DOMAIN_plural: "domains",
            premiumServiceType_DOMAIN_capitalized: "Domain",
            premiumServiceType_DOMAIN: "domain",
            premiumServiceType_WIX_PLAN_withoutPremiumPrefix_plural_capitalized:
              "Plans",
            premiumServiceType_WIX_PLAN_withoutPremiumPrefix_plural: "Plans",
            premiumServiceType_WIX_PLAN_withoutPremiumPrefix_capitalized:
              "Plan",
            premiumServiceType_WIX_PLAN_withoutPremiumPrefix: "Plan",
            premiumServiceType_WIX_PLAN_plural_capitalized: "Premium Plans",
            premiumServiceType_WIX_PLAN_plural: "Premium Plans",
            premiumServiceType_WIX_PLAN_capitalized: "Premium Plan",
            premiumServiceType_WIX_PLAN: "Premium Plan"
          },
          taxType: {
            japan_jct: "JCT ({{taxPercent}}%)",
            eu_vat: "VAT ({{taxPercent}}%)",
            regular: "VAT ({{taxPercent}}%)"
          }
        }
      };
      a.translations("en", b),
        a.translations(b),
        a.preferredLanguage && a.preferredLanguage("en");
    }
  ])
  .value("preferredLanguage", "en");
`;

it("simplest test works", () => {
  const { code } = babel.transform(example, { plugins: [plugin] });
  expect(code).toMatchSnapshot();
});

it("longer test works", () => {
  const { code } = babel.transform(example2, { plugins: [plugin] });
  expect(code).toMatchSnapshot();
});

it("full files work", () => {
  const { code } = babel.transform(example3, { plugins: [plugin] });
  expect(code).toMatchSnapshot();
});
