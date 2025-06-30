import { Request, Response, NextFunction} from "express"
import { validationResult } from "express-validator"


export const handleInputErrors = (req: Request , res: Response, next: NextFunction) => {

    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() })
        return
    }

    next() //fc. dinámica. En vez de llamar a createProduct, uso ete generico que me permite
           //reutilizar los validadores
}

