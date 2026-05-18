// VERSION 1.1.0 (17 May 2026)

window.CaseDetail = window.CaseDetail || {};

CaseDetail.TeamChat = {

    collapseChatPanel: function() {
        const interval = setInterval(() => {
            try {
                const globalDoc = window.top.document;

                const btn = globalDoc.querySelector('button[aria-label="Teams chats"]');

                if (btn) {
                    if (btn.getAttribute("aria-expanded") === "true") {
                        btn.click();
                    }

                    clearInterval(interval);
                }
            } catch (e) {
                console.error("❌ Error accessing DOM:", e);
            }
        }, 1000);

        setTimeout(() => clearInterval(interval), 30000);
    }

}