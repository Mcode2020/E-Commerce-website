const Product = require('../models/product');
const Review=require('../models/review');

module.exports.create=function(req,res){
    
    Review.create(req.body, function(err, review){
        console.log('********', req.body, '**********');
        if(err){
            console.log('error in posting review');
            return;
        }
        Product.findById(req.body.product, function(err, product){
            if(err){
                console.log('Error in posting review for the product');
                return;
            }
            
            product.reviews.push(review);
            product.save();
        })
    })
    return res.redirect('back');
}