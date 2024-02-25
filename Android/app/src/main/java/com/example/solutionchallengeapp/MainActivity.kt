package com.example.solutionchallengeapp

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView

class MainActivity : AppCompatActivity() {
    private lateinit var getStartedButton: Button
    private lateinit var loginButton: Button
    private lateinit var registerTv : TextView
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        getStartedButton = findViewById(R.id.getStartedBtn)
        loginButton = findViewById(R.id.loginBtn)
        registerTv = findViewById(R.id.signUpTv)

        loginButton.setOnClickListener {
            val intent = Intent(this, LoginActivity::class.java)
            startActivity(intent)

        }
        registerTv.setOnClickListener {
            val intent = Intent(this,RegisterActivity::class.java)
            startActivity(intent)
        }
        getStartedButton.setOnClickListener {
            val intent = Intent(this, DemoActivity::class.java)
            startActivity(intent)
        }


    }

}