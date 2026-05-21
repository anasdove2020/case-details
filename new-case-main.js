// VERSION 1.1.44 (17 May 2026)

debugger;
var CaseDetail = CaseDetail || {};

window.caseDetailOnLoad = function(executionContext) {
    var ctx = executionContext.getFormContext();
    CaseDetail.TeamChat.collapseChatPanel();
    CaseDetail.State.initialize(ctx);
    ctx.data.process.addOnStageChange(CaseDetail.Stage.onStageChange);
}

window.quoteNumberOnChange = function(executionContext) {
    CaseDetail.Events.quoteNumberOnChange(executionContext);
}

window.purchaseOrderNumberOnChange = function(executionContext) {
    CaseDetail.Events.purchaseOrderNumberOnChange(executionContext);
}

window.orderNumberOnChange = function(executionContext) {
    CaseDetail.Events.orderNumberOnChange(executionContext);
}

window.dueDateOnChange = function(executionContext) {
    CaseDetail.Events.dueDateOnChange(executionContext);
}