// VERSION 1.1.0 (17 May 2026)

var CaseDetail = CaseDetail || {};

CaseDetail.Constants = {
    Field: {
        QuoteNumber: "new_quotenumber",
        PurchaseOrderNumber: "new_purchaseordernumber",
        OrderNumber: "new_ordernumber",
        StatusReason: "statuscode",
        AssignTo: "ownerid",
        DueDate: "new_duedate",
        TransitionInProgress: "new_transitioninprogress",
        CurrentPhase: "cr22d_current_phase"
    },
    Stage: {
        Enquiry: "Enquiry",
        Quote: "Quote",
        Order: "Order",
        Draw: "Draw",
        EndOfLife: "End Of Life"
    },
    StatusReason: {
        New: 1,
        QuoteSent: 2,
        OrderReceived: 3,
        DrawInProgress: 4,
        Drawn: 675430001,
        NotWon: 100000001
    },
    Teams: {
        SalesTeamName: "Plate And Steel Sales Team"
    }
};