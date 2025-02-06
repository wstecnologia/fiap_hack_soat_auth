import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const controller = new UserController()
export const router = Router();

router.post('/auth', async(req, res)=>{
  try {
    const retorno = await controller.login(req, res)
    
    res.status(200).json(retorno)  
  } catch (error) {
    console.error(error)
    res.status(400).json({message:error.message|| "An error occurred while logging in."})
  }
  
});

router.post('/create-user', async (req, res)=>{
  try {
    const retorno = await controller.createLogin(req, res)

    res.status(200).json(retorno) 
  } catch (error) {
    console.error(error)
    res.status(400).json({message:error.message || "An error occurred while registering."})
  }
  
});

router.post('/validate-create-user', async (req, res)=>{
  try {
    const retorno = await controller.confirmCreateLogin(req, res)

    res.status(200).json(retorno)
  } catch (error) {
    console.error(error)
    res.status(400).json({message:error.message || "An error occurred while validating user."})
  }

});


