--add treatment
IF OBJECT_ID('ADD_TREATMENT') IS NOT NULL
    DROP PROCEDURE ADD_TREATMENT;
GO

CREATE PROCEDURE ADD_TREATMENT @pownerID int, @ppetName NVARCHAR(100), @pprocedureID INT, @ptreatmentDate DATE, @pnotes NVARCHAR(100), @ppayment MONEY 
AS
BEGIN
    BEGIN TRY
        INSERT INTO TREATMENT(ownerID, petName, procedureID, treatmentDate, notes, payment)
        VALUES(@pownerID, @ppetName, @pprocedureID, @ptreatmentDate, @pnotes, @ppayment);
    END TRY

    BEGIN CATCH
        IF ERROR_NUMBER() = 2627
            THROW 50020, 'unable to add Treatment', 1
    END CATCH
    END
GO



-- delete treatment
IF OBJECT_ID('DELETE_TREATMENT') IS NOT NULL
    DROP PROCEDURE DELETE_TREATMENT
GO
CREATE PROCEDURE DELETE_TREATMENT
    @pownerID int,
    @ppetName NVARCHAR(100),
    @pprocedureID INT 
AS
BEGIN
    BEGIN TRY
    DELETE FROM TREATMENT
    WHERE ownerID = @pownerID
        AND petName = @ppetName
        AND procedureID = @pprocedureID
    END TRY
    BEGIN CATCH
    END CATCH
END
GO

--delete owner

IF OBJECT_ID('DELETE_OWNER') IS NOT NULL
    DROP PROCEDURE DELETE_OWNER
GO
CREATE PROCEDURE DELETE_OWNER
    @pownerID int
    
AS
BEGIN
    BEGIN TRY
    DELETE FROM OWNER
    WHERE ownerID = @pownerID

    END TRY
    BEGIN CATCH
    END CATCH
END
GO

-- add owner
IF OBJECT_ID('ADD_OWNER') IS NOT NULL
    DROP PROCEDURE ADD_OWNER
GO

CREATE PROCEDURE ADD_OWNER
    @pownerID INT OUTPUT,
    @psurname NVARCHAR(50),
    @pfirstname NVARCHAR(50),
    @pphone INT
AS
BEGIN
    BEGIN TRY
        INSERT INTO [Owner]
        (ownerID, surname, firstname, phone)
    VALUES
        (@pownerID, @psurname, @pfirstname, @pphone)
    END TRY
    BEGIN CATCH
    IF ERROR_NUMBER() = 2627
            THROW 50020, 'unable to add Owner', 1
    END CATCH

    RETURN @pownerID
END
GO