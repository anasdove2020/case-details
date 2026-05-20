// VERSION 1.1.0 (17 May 2026)

var CaseDetail = CaseDetail || {};

CaseDetail.Events = {
    quoteNumberOnChange: function (executionContext) {
        var ctx = executionContext.getFormContext();
        CaseDetail.Helper.clearFieldNotification(ctx, CaseDetail.Constants.Field.QuoteNumber);

        if (CaseDetail.Stage.isEnquiry(ctx)) {
            CaseDetail.DueDate.setNotRequired(ctx);
            CaseDetail.State.QuoteNumber = CaseDetail.QuoteNumber.get(ctx);
            if (CaseDetail.QuoteNumber.isNotBlank(ctx)) {
                CaseDetail.StatusReason.setQuoteSent(ctx);
                CaseDetail.Helper.saveEntity(ctx);
            } else {
                CaseDetail.StatusReason.setNew(ctx);
                CaseDetail.Helper.saveEntity(ctx);
            }
        } else {
            if (CaseDetail.QuoteNumber.isBlank(ctx)) {
                CaseDetail.QuoteNumber.set(ctx, CaseDetail.State.QuoteNumber);
                const errorMessage = `Cannot be blank during the ${CaseDetail.Stage.getName(ctx)} stage.`;
                CaseDetail.Helper.setFieldNotification(ctx, CaseDetail.Constants.Field.QuoteNumber, errorMessage);

                setTimeout(() => {
                    CaseDetail.Helper.clearFieldNotification(ctx, CaseDetail.Constants.Field.QuoteNumber);
                }, 5000);
            } else {
                CaseDetail.Helper.saveEntity(ctx);
                CaseDetail.State.QuoteNumber = CaseDetail.QuoteNumber.get(ctx);
            }
        }
    },

    purchaseOrderNumberOnChange: function (executionContext) {
        var ctx = executionContext.getFormContext();
        CaseDetail.Helper.clearFieldNotification(ctx, CaseDetail.Constants.Field.PurchaseOrderNumber);

        if (CaseDetail.Stage.isEnquiry(ctx)) {
            CaseDetail.Helper.saveEntity(ctx);
            CaseDetail.State.PurchaseOrderNumber = CaseDetail.PurchaseOrderNumber.get(ctx);
            return;
        }

        if (CaseDetail.Stage.isQuote(ctx)) {

            if (CaseDetail.PurchaseOrderNumber.isBlank(ctx) && CaseDetail.OrderNumber.isNotBlank(ctx)) {
                CaseDetail.PurchaseOrderNumber.set(ctx, CaseDetail.State.PurchaseOrderNumber);
                const errorMessage = `Cannot be blank when an Order Number has been entered.`;
                CaseDetail.Helper.setFieldNotification(ctx, CaseDetail.Constants.Field.PurchaseOrderNumber, errorMessage);
                setTimeout(() => {
                    CaseDetail.Helper.clearFieldNotification(ctx, CaseDetail.Constants.Field.PurchaseOrderNumber);
                }, 5000);
                return;
            }

            CaseDetail.Helper.saveEntity(ctx);
            CaseDetail.State.PurchaseOrderNumber = CaseDetail.PurchaseOrderNumber.get(ctx);
            return;
        }

        if (CaseDetail.Stage.isDraw(ctx) || CaseDetail.Stage.isEndOfLife(ctx)) {

            if (CaseDetail.PurchaseOrderNumber.isBlank(ctx)) {

                CaseDetail.PurchaseOrderNumber.set(ctx, CaseDetail.State.PurchaseOrderNumber);
                const errorMessage = `Cannot be blank during the ${CaseDetail.Stage.getName(ctx)} stage.`;
                CaseDetail.Helper.setFieldNotification(ctx, CaseDetail.Constants.Field.PurchaseOrderNumber, errorMessage);
                setTimeout(() => {
                    CaseDetail.Helper.clearFieldNotification(ctx, CaseDetail.Constants.Field.PurchaseOrderNumber);
                }, 5000);
                return;

            }

            CaseDetail.Helper.saveEntity(ctx);
            CaseDetail.State.PurchaseOrderNumber = CaseDetail.PurchaseOrderNumber.get(ctx);
            return;
        }
    },

    orderNumberOnChange: function (executionContext) {
        var ctx = executionContext.getFormContext();
        CaseDetail.Helper.clearFieldNotification(ctx, CaseDetail.Constants.Field.OrderNumber);

        if (CaseDetail.Stage.isEnquiry(ctx)) {
            CaseDetail.Helper.saveEntity(ctx);
            CaseDetail.State.OrderNumber = CaseDetail.OrderNumber.get(ctx);
            return;
        }

        if (CaseDetail.Stage.isQuote(ctx)) {

            if (CaseDetail.OrderNumber.isBlank(ctx) && CaseDetail.DueDate.isNotBlank(ctx)) {
                CaseDetail.OrderNumber.set(ctx, CaseDetail.State.OrderNumber);
                const errorMessage = `Cannot be blank when Due Date has been entered.`;
                CaseDetail.Helper.setFieldNotification(ctx, CaseDetail.Constants.Field.OrderNumber, errorMessage);
                setTimeout(() => {
                    CaseDetail.Helper.clearFieldNotification(ctx, CaseDetail.Constants.Field.OrderNumber);
                }, 5000);
                return;
            }

            CaseDetail.Helper.saveEntity(ctx);
            CaseDetail.State.OrderNumber = CaseDetail.OrderNumber.get(ctx);
            return;
        }

        if (CaseDetail.Stage.isDraw(ctx) || CaseDetail.Stage.isEndOfLife(ctx)) {

            if (CaseDetail.OrderNumber.isBlank(ctx)) {

                CaseDetail.OrderNumber.set(ctx, CaseDetail.State.OrderNumber);
                const errorMessage = `Cannot be blank during the ${CaseDetail.Stage.getName(ctx)} stage.`;
                CaseDetail.Helper.setFieldNotification(ctx, CaseDetail.Constants.Field.OrderNumber, errorMessage);
                setTimeout(() => {
                    CaseDetail.Helper.clearFieldNotification(ctx, CaseDetail.Constants.Field.OrderNumber);
                }, 5000);
                return;

            }

            CaseDetail.Helper.saveEntity(ctx);
            CaseDetail.State.OrderNumber = CaseDetail.OrderNumber.get(ctx);
            return;
        }
    },

    dueDateOnChange: function (executionContext) {
        var ctx = executionContext.getFormContext();
        CaseDetail.Helper.clearFieldNotification(ctx, CaseDetail.Constants.Field.DueDate);

        if (CaseDetail.Stage.isEnquiry(ctx)) {
            CaseDetail.Helper.saveEntity(ctx);
            CaseDetail.State.DueDate = CaseDetail.DueDate.get(ctx);
            return;
        }

        if (CaseDetail.Stage.isQuote(ctx)) {

            if (CaseDetail.DueDate.isNotBlank(ctx)) {

                CaseDetail.StatusReason.setDrawingInProgress(ctx);
                CaseDetail.State.DueDate = CaseDetail.DueDate.get(ctx);
                CaseDetail.Helper.save(ctx, () => CaseDetail.Stage.nextStageFromQuoteToDraw(ctx));
                return;
                
            }

            CaseDetail.Helper.saveEntity(ctx);
            CaseDetail.State.DueDate = CaseDetail.DueDate.get(ctx);
            return;
        }

        if (CaseDetail.Stage.isDraw(ctx) || CaseDetail.Stage.isEndOfLife(ctx)) {

            if (CaseDetail.DueDate.isBlank(ctx)) {

                CaseDetail.DueDate.set(ctx, CaseDetail.State.DueDate);
                const errorMessage = `Cannot be blank during the ${CaseDetail.Stage.getName(ctx)} stage.`;
                CaseDetail.Helper.setFieldNotification(ctx, CaseDetail.Constants.Field.DueDate, errorMessage);
                setTimeout(() => {
                    CaseDetail.Helper.clearFieldNotification(ctx, CaseDetail.Constants.Field.DueDate);
                }, 5000);
                return;

            }

            CaseDetail.Helper.saveEntity(ctx);
            CaseDetail.State.DueDate = CaseDetail.DueDate.get(ctx);
            return;
        }
    },

    assignToOnChange: function (executionContext) {

    }

};