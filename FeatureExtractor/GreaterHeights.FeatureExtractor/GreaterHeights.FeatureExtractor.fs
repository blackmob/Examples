namespace GreaterHeights
open System
open System.IO
open System.Drawing
open Emgu.CV
open Emgu.CV.CvEnum
open Emgu.CV.XFeatures2D
open Emgu.CV.Structure
open Emgu.CV.UI
open Emgu.CV.Util

module FeatureExtractor = 
    let findShape (image : Image<Bgr,byte>) (thresh : float)= 
        let contoursDetected = new VectorOfVectorOfPoint()
        let hierarchy = new Mat()                 
        use preProcessed = image.Convert<Gray, byte>().SmoothBlur(3,3).ThresholdBinary(new Gray(thresh), new Gray(255.)).Erode(10).Canny(thresh,thresh * 3.)
        CvInvoke.FindContours(preProcessed , contoursDetected, hierarchy, RetrType.Tree, Emgu.CV.CvEnum.ChainApproxMethod.ChainApproxSimple, Point(0,0));
        contoursDetected.ToArrayOfArray() |> Array.iter (fun item -> image.DrawPolyline(item, true, new Bgr(Color.Black) ,1,LineType.AntiAlias))
        image  
    let processFile path thresh = 
        match File.Exists(path) with
        | true ->            
            use image = new Image<Bgr,byte>(path)
            let imageWithFeatures = findShape image thresh 
            imageWithFeatures.Save(Path.Combine(Path.GetDirectoryName(path), Path.GetFileNameWithoutExtension(path) + Path.GetRandomFileName() + Path.GetExtension(path)))
            path
        | false -> path 

        
         

       
        