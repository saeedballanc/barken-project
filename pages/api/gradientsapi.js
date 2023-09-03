




 const GradientsApi = (req , res)=>{




     const apiGrad = [

        {
            id: 1,
            gradClass: 'gradclass-1',
            gradClassShadow: 'gradclassShadow-1',
            name: 'mountain sky',
            mode: 'static',
            copyGradient: "/* CSS */ background-image: linear-gradient(-45deg ,#44e9eb , #4148d4 60%, #262626 );"
        },
        {
            id: 2,
            gradClass: 'gradclass-2',
            gradClassShadow: 'gradclassShadow-2',
            name: 'royal',
            mode: 'dynamic',
            copyGradient: " background-image: linear-gradient(-45deg ,rgb(30, 255, 0)0% , hsl(157, 100%, 76%)70% ); animation: gradclass-2 3s linear infinite;      /* ANIMATION */ @keyframes gradclass-2{0%{filter: hue-rotate(-0deg);background-image: linear-gradient(-45deg ,rgb(30, 255, 0)0% , hsl(157, 100%, 76%)70% );}50%{filter: hue-rotate(360deg);background-image: linear-gradient(-60deg ,rgb(30, 255, 0)0% , hsl(157, 100%, 76%)70% );}100%{filter: hue-rotate(-0deg);background-image: linear-gradient(-45deg ,rgb(30, 255, 0)0% , hsl(157, 100%, 76%)70% );}}"
        },
        {
            id: 3,
            gradClass: 'gradclass-3',
            gradClassShadow: 'gradclassShadow-3',
            name: 'sunset',
            mode: 'static',
            copyGradient: "/* CSS */ background-image: linear-gradient(-45deg ,#ebc444 , #d4414a , #2c2d29 );"
        },
        {
            id: 4,
            gradClass: 'gradclass-4',
            gradClassShadow: 'gradclassShadow-4',
            name: 'Paradise',
            mode: 'dynamic',
            copyGradient: " /* CSS */ background-image: linear-gradient(-45deg ,rgb(30, 255, 0)0% , hsl(157, 100%, 76%)70% );animation: gradclass-2 3s linear infinite; }      /* ANIMATION */ @keyframes gradclass-2{0%{filter: hue-rotate(-0deg);background-image: linear-gradient(-45deg ,rgb(30, 255, 0)0% , hsl(157, 100%, 76%)70% );}50%{filter: hue-rotate(360deg);background-image: linear-gradient(-60deg ,rgb(30, 255, 0)0% , hsl(157, 100%, 76%)70% );}100%{filter: hue-rotate(-0deg);background-image: linear-gradient(-45deg ,rgb(30, 255, 0)0% , hsl(157, 100%, 76%)70% );}}"
        },
        {
            id: 5,
            gradClass: 'gradclass-5',
            gradClassShadow: 'gradclassShadow-5',
            name: 'Coca',
            mode: 'static',
            copyGradient: "/* CSS */ background-image: linear-gradient(-45deg ,#262626 , #e73a12 , #ff6c00 , #fffee6 );"
        },
        {
            id: 6,
            gradClass: 'gradclass-6',
            gradClassShadow: 'gradclassShadow-6',
            name: 'star',
            mode: 'static',
            copyGradient: " /* CSS */ background-image: linear-gradient(-45deg ,#84a5b8 , #d7dece, #273135 );"
        },
        {
            id: 7,
            gradClass: 'gradclass-7',
            gradClassShadow: 'gradclassShadow-7',
            name: 'Gummi',
            mode: 'static',
            copyGradient: "/* CSS */ background-image: linear-gradient(-45deg ,#262626 , #c612e7, #fff000 , #fffeed );"
        },
        {
            id: 8,
            gradClass: 'gradclass-8',
            gradClassShadow: 'gradclassShadow-8',
            name: 'sky',
            mode: 'static',
            copyGradient: " /* CSS */ background-image: linear-gradient(-45deg ,#0686fe , #06b8fe, #f7ffc6 );"
        },
        {
            id: 9,
            gradClass: 'gradclass-9',
            gradClassShadow: 'gradclassShadow-9',
            name: 'Rise',
            mode: 'static',
            copyGradient: "/* CSS */ background-image: linear-gradient(-45deg ,#262626 , #3fa7a9, #ffbcbd );"
        },
        {
            id: 10,
            gradClass: 'gradclass-10',
            gradClassShadow: 'gradclassShadow-10',
            name: 'vs',
            mode: 'static',
            copyGradient: " /* CSS */ background-image: linear-gradient(-45deg ,#262626 , #ff0000, #00ccff , #e9fffa);"
        },
        {
            id: 11,
            gradClass: 'gradclass-11',
            gradClassShadow: 'gradclassShadow-11',
            name: 'icecream coca',
            mode: 'static',
            copyGradient: "  /* CSS */ background-image: linear-gradient(-45deg ,#262626 , #ff0000, #ffb178 , #e9fffa);"
        },
        {
            id: 12,
            gradClass: 'gradclass-12',
            gradClassShadow: 'gradclassShadow-12',
            name: 'rainy sky',
            mode: 'static',
            copyGradient: " /* CSS */ background-image: linear-gradient(-45deg ,#262626 , #612c6a, #4a79b3 , #47c1df , #ffffff);"
        },
     ];


     res.status(200).json({ data:apiGrad })

 }



 export default GradientsApi;