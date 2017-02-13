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
    let edgeDetect (image : Image<Gray, byte> ) =         
        let sobel = image.Sobel(0, 1, 3).Add(image.Sobel(1, 0, 3)).AbsDiff(new Gray(0.0));
        new Image<Gray, byte>(sobel.Bitmap)

    let detectKeyPoints (image : Image<Gray, byte>) =        
        use surfDetector = new SURF(100.0)     
        surfDetector.Detect(image) |> Array.iter (fun item -> image.Draw("X", Point.Round(item.Point), FontFace.HersheyPlain, 1.5, new Gray(0.)) )        
        image

    let processFile (path : string) = 
        if File.Exists(path) then
            use image = new Image<Gray,byte>(path)
            let imageWithFeatures = edgeDetect image |> image.Add |> detectKeyPoints
            Some(imageWithFeatures.Save(Path.Combine(Path.GetDirectoryName(path), Path.GetFileNameWithoutExtension(path) + Path.GetRandomFileName() + Path.GetExtension(path))))
        else
            None        
        