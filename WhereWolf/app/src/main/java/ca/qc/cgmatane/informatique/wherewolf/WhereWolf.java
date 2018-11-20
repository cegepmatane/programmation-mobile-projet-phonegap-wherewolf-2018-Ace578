package ca.qc.cgmatane.informatique.wherewolf;

import android.os.Bundle;
import org.apache.cordova.*;
import org.apache.cordova.DroidGap;

public class WhereWolf extends DroidGap {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.init();
        super.loadUrl(Config.getStartUrl());
        super.loadUrl("file:///android_asset/www/index.html");
    }
}
