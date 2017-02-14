#r "C:/repos/Examples/FeatureExtractor/packages/EmguCV/lib/net30/Emgu.CV.UI.dll"
#r "C:/repos/Examples/FeatureExtractor/packages/EmguCV/lib/net30/Emgu.CV.UI.gl.dll"
#r "C:/repos/Examples/FeatureExtractor/packages/EmguCV/lib/net30/Emgu.CV.World.dll"

open System
open System.IO
open System.Drawing
#load "GreaterHeights.FeatureExtractor.fs"
open GreaterHeights.FeatureExtractor
 
Directory.GetFiles(@".\greaterHeights.FeatureExtractor\TestImages","*.jpg") |> Array.iter (fun item -> GreaterHeights.FeatureExtractor.processFile item 128. |> ignore )       