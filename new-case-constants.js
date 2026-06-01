// VERSION 1.1.0 (1 June 2026)

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
        Draw: "Draw",
        EndOfLife: "End Of Life"
    },
    StatusReason: {
        Enquiry: 1,
        Quote: 2,
        Draw: 4,
        EndOfLife: 675430001
    },
    Teams: {
        SalesTeamName: "Plate And Steel Sales Team"
    }
};