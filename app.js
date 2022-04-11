const feet2inch = 12;
const feet2cm = 30.48;
const inch2cm = 2.54;
const stone2pound = 12;

const m2cm = 100;
const pound2kg = 0.453592;


$(function(){
    
    function focusHeightFields(){
        $('#heightinfeet').focus();
        $('#heightininches').focus();
        $('#heightincm').focus();
        $('#heightinm').focus();
    }

    function focusWeightFields(){
        $('#weightinstone').focus();
        $('#weightinpounds').focus();
    }

    $('#heightinfeet').on('input', function(){
        focusHeightFields();
        $('#heightinfeet').focus();
        data = $(this).val();
        $('#heightininches').val(data * feet2inch);
        $('#heightincm').val(data * feet2cm);
    });

    $('#heightininches').on('input', function(){
        focusHeightFields();
        $('#heightininches').focus();
        data = $(this).val();
        $('#heightinfeet').val(data / feet2inch);
        $('#heightincm').val(data * inch2cm);
    });

    $('#heightincm').on('input', function(){
        focusHeightFields();
        $('#heightincm').focus();
        data = $(this).val();
        $('#heightinfeet').val(data / feet2cm);
        $('#heightininches').val(data / feet2inch);
    });

    $('#weightinstone').on('input', function(){
        data = $(this).val();
        focusWeightFields();
        $('#weightinpounds').val(data * stone2pound);
        $('#weightinstone').focus();
    });

    $('#weightinpounds').on('input', function(){      
        data = $(this).val();
        // console.log(data);       
        focusWeightFields();
        $('#weightinstone').val(data / stone2pound);
        $('#weightinpounds').focus();
    });
});

function calculateBMI(){
    preventDefault();
    let weightinkg = $('#weightinpounds') * pound2kg;
    let heightinm = $('#heightincm') / m2cm;

    let bmi = weightinkg/(heightinm ** 2);
    console.log(bmi);   
}

