package com.bear.bearspringboot.controller;


import com.bear.bearspringboot.entity.Annex;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/annex")
public class AnnexController {

    @PostMapping("/uploadAnnex")
    public void upload(MultipartFile multipartFile){

    }

    @PostMapping("/annexs")
    public void addAnnex(@RequestBody Annex annex){

    }

    @DeleteMapping("/annexs/{annexId}")
    public void deleteAnnex(@PathVariable("annexId") int annexId){

    }

    @PutMapping("/annexs")
    public void updateAnnex(@RequestBody Annex annex){

    }

    @GetMapping("/annexs")
    public void getAnnexs(){

    }
}
