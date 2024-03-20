import joi from "joi";

const userSchema = joi.object({
  name: joi.string().min(2).max(200).required(),
  cpf: joi.string().min(11).max(11).required(),
});

const validateUser = async (req, res, next) => {
  const { name, cpf } = req.body;

  const validation = userSchema.validate(req.body);

  if (validation.error) {
    const error = validation.error.details.map((value) => value.message);

    return res.status(422).send(error);
  }
  res.locals.user = { cpf }; 
 
  next();
};



export { validateUser };
