




 const GradientsApi = (req , res)=>{




     const apiGrad = [

        {
            id: 1,
            gradClass: 'gradclass-1',
            gradClassShadow: 'gradclassShadow-1',
            name: 'sky',
            mode: 'static',
            copyGradient: "/* CSS */ background-image: linear-gradient(-45deg ,rgb(255, 60, 0)0% , rgb(255, 196, 0)70% );"
        },
        {
            id: 2,
            gradClass: 'gradclass-2',
            gradClassShadow: 'gradclassShadow-2',
            name: 'lava',
            mode: 'dynamic',
            copyGradient: " /* HTML */ <div className='gradclass-2'></div>  /* CSS */ .gradclass-2{background-image: linear-gradient(-45deg ,rgb(30, 255, 0)0% , hsl(157, 100%, 76%)70% );animation: gradclass-2 3s linear infinite; }      /* ANIMATION */ @keyframes gradclass-2{0%{filter: hue-rotate(-0deg);background-image: linear-gradient(-45deg ,rgb(30, 255, 0)0% , hsl(157, 100%, 76%)70% );}50%{filter: hue-rotate(360deg);background-image: linear-gradient(-60deg ,rgb(30, 255, 0)0% , hsl(157, 100%, 76%)70% );}100%{filter: hue-rotate(-0deg);background-image: linear-gradient(-45deg ,rgb(30, 255, 0)0% , hsl(157, 100%, 76%)70% );}}"
        },
        {
            id: 3,
            gradClass: 'gradclass-1',
            gradClassShadow: 'gradclassShadow-1',
            name: 'sky',
            mode: 'static',
            copyGradient: "/* CSS */ background-image: linear-gradient(-45deg ,rgb(255, 60, 0)0% , rgb(255, 196, 0)70% );"
        },
        {
            id: 4,
            gradClass: 'gradclass-2',
            gradClassShadow: 'gradclassShadow-2',
            name: 'lava',
            mode: 'dynamic',
            copyGradient: " /* HTML */ <div className='gradclass-2'></div>  /* CSS */ .gradclass-2{background-image: linear-gradient(-45deg ,rgb(30, 255, 0)0% , hsl(157, 100%, 76%)70% );animation: gradclass-2 3s linear infinite; }      /* ANIMATION */ @keyframes gradclass-2{0%{filter: hue-rotate(-0deg);background-image: linear-gradient(-45deg ,rgb(30, 255, 0)0% , hsl(157, 100%, 76%)70% );}50%{filter: hue-rotate(360deg);background-image: linear-gradient(-60deg ,rgb(30, 255, 0)0% , hsl(157, 100%, 76%)70% );}100%{filter: hue-rotate(-0deg);background-image: linear-gradient(-45deg ,rgb(30, 255, 0)0% , hsl(157, 100%, 76%)70% );}}"
        },
        {
            id: 5,
            gradClass: 'gradclass-1',
            gradClassShadow: 'gradclassShadow-1',
            name: 'sky',
            mode: 'static',
            copyGradient: "/* CSS */ background-image: linear-gradient(-45deg ,rgb(255, 60, 0)0% , rgb(255, 196, 0)70% );"
        },
        {
            id: 6,
            gradClass: 'gradclass-2',
            gradClassShadow: 'gradclassShadow-2',
            name: 'lava',
            mode: 'dynamic',
            copyGradient: " /* HTML */ <div className='gradclass-2'></div>  /* CSS */ .gradclass-2{background-image: linear-gradient(-45deg ,rgb(30, 255, 0)0% , hsl(157, 100%, 76%)70% );animation: gradclass-2 3s linear infinite; }      /* ANIMATION */ @keyframes gradclass-2{0%{filter: hue-rotate(-0deg);background-image: linear-gradient(-45deg ,rgb(30, 255, 0)0% , hsl(157, 100%, 76%)70% );}50%{filter: hue-rotate(360deg);background-image: linear-gradient(-60deg ,rgb(30, 255, 0)0% , hsl(157, 100%, 76%)70% );}100%{filter: hue-rotate(-0deg);background-image: linear-gradient(-45deg ,rgb(30, 255, 0)0% , hsl(157, 100%, 76%)70% );}}"
        },
        {
            id: 7,
            gradClass: 'gradclass-1',
            gradClassShadow: 'gradclassShadow-1',
            name: 'sky',
            mode: 'static',
            copyGradient: "/* CSS */ background-image: linear-gradient(-45deg ,rgb(255, 60, 0)0% , rgb(255, 196, 0)70% );"
        },
        {
            id: 8,
            gradClass: 'gradclass-2',
            gradClassShadow: 'gradclassShadow-2',
            name: 'lava',
            mode: 'dynamic',
            copyGradient: " /* HTML */ <div className='gradclass-2'></div>  /* CSS */ .gradclass-2{background-image: linear-gradient(-45deg ,rgb(30, 255, 0)0% , hsl(157, 100%, 76%)70% );animation: gradclass-2 3s linear infinite; }      /* ANIMATION */ @keyframes gradclass-2{0%{filter: hue-rotate(-0deg);background-image: linear-gradient(-45deg ,rgb(30, 255, 0)0% , hsl(157, 100%, 76%)70% );}50%{filter: hue-rotate(360deg);background-image: linear-gradient(-60deg ,rgb(30, 255, 0)0% , hsl(157, 100%, 76%)70% );}100%{filter: hue-rotate(-0deg);background-image: linear-gradient(-45deg ,rgb(30, 255, 0)0% , hsl(157, 100%, 76%)70% );}}"
        },
        {
            id: 9,
            gradClass: 'gradclass-1',
            gradClassShadow: 'gradclassShadow-1',
            name: 'sky',
            mode: 'static',
            copyGradient: "/* CSS */ background-image: linear-gradient(-45deg ,rgb(255, 60, 0)0% , rgb(255, 196, 0)70% );"
        },
        {
            id: 10,
            gradClass: 'gradclass-2',
            gradClassShadow: 'gradclassShadow-2',
            name: 'lava',
            mode: 'dynamic',
            copyGradient: " /* HTML */ <div className='gradclass-2'></div>  /* CSS */ .gradclass-2{background-image: linear-gradient(-45deg ,rgb(30, 255, 0)0% , hsl(157, 100%, 76%)70% );animation: gradclass-2 3s linear infinite; }      /* ANIMATION */ @keyframes gradclass-2{0%{filter: hue-rotate(-0deg);background-image: linear-gradient(-45deg ,rgb(30, 255, 0)0% , hsl(157, 100%, 76%)70% );}50%{filter: hue-rotate(360deg);background-image: linear-gradient(-60deg ,rgb(30, 255, 0)0% , hsl(157, 100%, 76%)70% );}100%{filter: hue-rotate(-0deg);background-image: linear-gradient(-45deg ,rgb(30, 255, 0)0% , hsl(157, 100%, 76%)70% );}}"
        },
     ];


     res.status(200).json({ data:apiGrad })

 }



 export default GradientsApi;