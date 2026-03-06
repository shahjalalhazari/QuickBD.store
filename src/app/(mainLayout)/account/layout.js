import AccountSidebar from '@/components/account/AccountSidebar';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import "./account.css";

export default function AccountLayout({ children }) {
  return (
    <div className="quickbd-container account-page">
      {/* BREADCRUMBS */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Account" }
        ]}
      />

      {/* PAGE HEADING */}
      <h3 className="page-heading">My Account</h3>

      <div className="account-page-grid">
        {/* SIDEBAR */}
        <aside className="account-sidebar-area">
          <AccountSidebar />
        </aside>

        {/* MAIN BODY CONTENT */}
        <main className="account-content">
          {children}
        </main>
      </div>
    </div>
  );
}