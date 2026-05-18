// VERSION 1.1.0 (17 May 2026)

var CaseDetail = CaseDetail || {};

CaseDetail.State = {
    QuoteNumber: null,
    PurchaseOrderNumber: null,
    OrderNumber: null,
    StatusReason: 0,
    DueDate: null,

    initialize: function(ctx) {
        CaseDetail.State.QuoteNumber = CaseDetail.QuoteNumber.get(ctx);
        CaseDetail.State.PurchaseOrderNumber = CaseDetail.PurchaseOrderNumber.get(ctx);
        CaseDetail.State.OrderNumber = CaseDetail.OrderNumber.get(ctx);
        CaseDetail.State.StatusReason = CaseDetail.StatusReason.get(ctx);
        CaseDetail.State.DueDate = CaseDetail.DueDate.get(ctx);
    }
};