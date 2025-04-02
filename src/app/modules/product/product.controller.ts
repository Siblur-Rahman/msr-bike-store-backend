import { Request, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import { productService } from "./product.service";
import catchAsync from "../../utils/catchAsync";

const createProduct = catchAsync(async (req: Request, res: Response)=>{
   
    const payload = req.body
    const result = await productService.createProduct(payload)
    
    sendResponse(res, {
      statusCode: StatusCodes.CREATED,
      message: 'product created successfully',
      data: result,
    })
})
const getProduct = catchAsync(async (req: Request, res: Response) => {
    
    const result = await productService.getProduct(req.query)

    sendResponse(res, {
      statusCode: StatusCodes.CREATED,
      message: 'Product got successfully',
      data: result,
    })
})

  const getSingleProduct = catchAsync(async (req: Request, res: Response) => {

    const productId = req.params.productId

    const result = await productService.getSingleProduct(productId)
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'User got successfully',
      data: result,
    })
})
  
  const updateProduct = catchAsync(async (req: Request, res: Response) => {
    
    const productId = req.params.productId
    const body = req.body
    const result = await productService.updateProduct(productId, body)
    sendResponse(res, {
      statusCode: StatusCodes.CREATED,
      message: 'User updated successfully',
      data: result,
    })
})
  
  const deleteProduct = catchAsync(async (req: Request, res: Response) => {
  
    const productId = req.params.productId
    await productService.deleteProduct(productId)

    sendResponse(res, {
      statusCode: StatusCodes.CREATED,
      message: 'User deleted successfully',
      data: {},
    })
})

export const productController ={
    createProduct,
    getProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
}