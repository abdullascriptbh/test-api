const express = require("express");
const app = express();
app.set("trust proxy");
app.use(express.json());
app.use(
	express.urlencoded({
        limit: "5mb",
		extended: true,
	})
);
const router = express.Router();
app.use(router)
app.get("/", (req, res)=> {

    // data manupulations
    res.status(200).json({
        result: 0,
        msg: "success"
    })
})


// ---- GET ROUTES ---- //

// Parameters Style
router.get("/book/get-chapter-page/:id/:xyz", (req, res)=> {
    let id = req.params.id
    let xyz = req.params.xyz

    // Data Manipulation Goes Here

    res.status(200).json({
        result: 0,
        msg: id, 
        data: xyz
    })
})

// Query Style
router.get("/book/get-chapter-page", (req, res) => {
    let anything = req.query.anything

    // Data Manipulation Goes Here

    res.status(200).json({
        result: 0,
        msg: anything
    })
})

// ---- POST ROUTE ---- //

router.post("/find-lastname", (req, res)=>{

    const arrayofname = [
        {
            firstname: "bader",
            lastname: "almahmood"
        },        
        {
            firstname: "abdulla",
            lastname: "mahfood"
        },
        {
            firstname: "dana",
            lastname: "alaskari"
        },
        {
            firstname: "mariam",
            lastname: "aleskafi"
        },
        {
            firstname: "mariam",
            lastname: "bader"
        },
    ]

    const firstname = req.body.firstname
    if(firstname){

        arrayofname.map((element, index)=> {
            
            console.log(`${index} ${JSON.stringify(element, null, 4)}`)

            if(firstname == element.firstname){
                res.status(200).json({
                    result: 0,
                    msg: "sucess",
                    data: `${element.firstname} ${element.lastname}`
                })
            }
        })
    } else {
        res.status(200).json({
            result: 1,
            msg: "error",
            data: "firstname is empty"
        })
    }

})


app.listen(3000, function () {
	console.log("APP API Running On Port 3000!");
});
