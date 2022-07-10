$.ajax({

    type :  'get',
    url: 'https://api.covid19api.com/summary',
    success : function(responce)
    {
        console.log(responce.Countries)

        for(var i=0; i<responce.Countries.length; i++)
        {
            var TotalRecovered=responce.Countries[i].TotalConfirmed - responce.Countries[i].TotalDeaths - responce.Countries[i].NewConfirmed
            var tablerow=
            `<tr>

                <td>${responce.Countries[i].Country}</td>
                <td>${responce.Countries[i].TotalConfirmed}</td>
                <td>${responce.Countries[i].NewConfirmed}</td>
                <td>${TotalRecovered}</td>
                <td>${responce.Countries[i].TotalDeaths}</td>
            
            </tr>`

            $('#tbody').append(tablerow)
        }

        $('#covidtable').DataTable()

    },
    error: function(error)
    {
        console.log(error)
    }
})