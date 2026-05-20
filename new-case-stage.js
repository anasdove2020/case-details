// VERSION 1.1.0 (17 May 2026)

var CaseDetail = CaseDetail || {};

CaseDetail.Stage = {
    get: function(ctx) {
        return ctx.data.process.getActiveStage();
    },
    getName: function(ctx) {
        var stage = this.get(ctx);
        if (!stage)
            return null;
        return stage.getName();
    },
    getId: function(ctx) {
        var stage = this.get(ctx);
        if (!stage)
            return null;
        return stage.getId();
    },
    isEnquiry: function(ctx) {
        return this.getName(ctx) === CaseDetail.Constants.Stage.Enquiry;
    },
    isQuote: function(ctx) {
        return this.getName(ctx) === CaseDetail.Constants.Stage.Quote;
    },
    isDraw: function(ctx) {
        return this.getName(ctx) === CaseDetail.Constants.Stage.Draw;
    },
    isEndOfLife: function(ctx) {
        return this.getName(ctx) === CaseDetail.Constants.Stage.EndOfLife;
    },
    onStageChange: function(executionContext) {
        var ctx = executionContext.getFormContext();
        var stageName = CaseDetail.Stage.getName(ctx);
        CaseDetail.CurrentPhase.set(ctx, stageName);

        switch(stageName) {
            case CaseDetail.Constants.Stage.Enquiry:
                CaseDetail.StatusReason.setNew(ctx);
                break;

            case CaseDetail.Constants.Stage.Quote:
                CaseDetail.StatusReason.setQuoteSent(ctx);
                break;

            case CaseDetail.Constants.Stage.Draw:
                CaseDetail.StatusReason.setDrawingInProgress(ctx);
                break;

            case CaseDetail.Constants.Stage.EndOfLife:
                CaseDetail.StatusReason.setDrawn(ctx);
                break;
        }

        setTimeout(function () { 
            CaseDetail.Helper.saveEntity(ctx); 
        }, 1000);
    },
    nextStage: function(ctx, currentStage, nextStage) {
        ctx.data.process.moveNext(res => {
            if (res === "success") {
                const message = `Stage successfully advanced from ${currentStage} to ${nextStage}.`;
                CaseDetail.Helper.setInfoNotification(formContext, message);
                
                setTimeout(() => {
                    clearInfoFormNotification(formContext);
                }, 5000);
            } else {
                const message = `Failed to advance stage from ${currentStage} to ${nextStage}.`;
                CaseDetail.Helper.setErrorNotification(formContext, message);
            }
        });
    },
    nextStageFromEnquiryToQuote: function(ctx) {
        CaseDetail.Stage.nextStage(ctx, CaseDetail.Constants.Stage.Enquiry, CaseDetail.Constants.Stage.Quote);
    },
    nextStageFromQuoteToDraw: function(ctx) {
        CaseDetail.Stage.nextStage(ctx, CaseDetail.Constants.Stage.Quote, CaseDetail.Constants.Stage.Draw);
    },
    nextStageFromDrawToQuote: function(ctx) {
        CaseDetail.Stage.nextStage(ctx, CaseDetail.Constants.Stage.Draw, CaseDetail.Constants.Stage.EndOfLife);
    }
};